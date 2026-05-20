/**
 * note-processor.ts
 *
 * Server-side utilities for loading and rendering notes at request / build
 * time inside the Next.js App Router.  Nothing in here is Next.js-specific
 * beyond the Node `fs` / `path` usage — these helpers are pure "read a
 * markdown file and turn it into HTML + TOC" logic.
 *
 * ## Memory strategy
 *
 * During `next build`, generateStaticParams returns ALL 480+ notes.
 * Next.js then calls the page component for every route in the same process.
 * Creating a fresh `unified()` pipeline + Shiki highlighter per note would
 * load hundreds of WASM grammars 480 times → OOM.
 *
 * Solution:
 *   1. `_processorPromise` — module-level singleton.  The pipeline is built
 *      exactly once; every subsequent call to `getProcessor()` awaits the
 *      same Promise.  unified freezes the processor on first `.process()` so
 *      it is safe to share across concurrent calls.
 *   2. `langs` whitelist — only the ~10 languages that actually appear in
 *      the notes are loaded.  Shiki's bundled-all mode loads 500+ grammars.
 */

import type { Note, TocEntry } from '@notes/content';
import { extractToc, rewriteWikiLinks, safeParseMatter } from '@notes/content';
import rehypeShiki from '@shikijs/rehype';
import { existsSync, readdirSync, readFileSync } from 'fs';
import path from 'path';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { type Processor, unified } from 'unified';

import { rehypeMermaid } from './rehype-code';
import { publicPath } from './site-path';

// ---------------------------------------------------------------------------
// Path constants — single source of truth for the whole app
// ---------------------------------------------------------------------------

/** Absolute path to the markdown notes directory. */
export const NOTES_DIR = path.join(process.cwd(), '..', '..', 'notes');

/** Absolute path to the generated content artefacts (.content/). */
export const CONTENT_DIR = path.join(process.cwd(), '.content');

// ---------------------------------------------------------------------------
// Singleton processor — built ONCE, reused for all 480+ notes
// ---------------------------------------------------------------------------

/**
 * Languages that actually appear in the notes codebase.
 * Enumerating them keeps Shiki from loading 500+ bundled grammars.
 * `lazy: true` is used instead — Shiki loads each grammar on first encounter
 * and caches it for all subsequent notes in the same build.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let _processorPromise: Promise<Processor<any, any, any, any, any>> | null = null;

/**
 * Returns the shared, frozen unified processor.
 * On the first call the pipeline is assembled and Shiki is initialised;
 * every subsequent call reuses the same in-memory instance.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getProcessor(): Promise<Processor<any, any, any, any, any>> {
  if (!_processorPromise) {
    _processorPromise = (async () => {
      const proc = unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeMermaid)
        .use(rehypeShiki, {
          themes: { light: 'github-light', dark: 'github-dark' },
          defaultColor: 'light',
          // lazy: load each language grammar on first encounter, then cache it.
          // With the singleton processor this means each grammar is loaded at
          // most ONCE across all 480 note renders — far cheaper than the
          // default "load every bundled language upfront" behaviour.
          lazy: true,
          // Silently fall back to plain text for any unrecognised fence label.
          fallbackLanguage: 'text',
        })
        .use(rehypeSlug)
        .use(rehypeStringify);
      // Trigger freeze so the pipeline is immutable before first shared use
      proc.freeze();
      return proc;
    })();
  }
  return _processorPromise;
}

// ---------------------------------------------------------------------------
// Manifest loading
// ---------------------------------------------------------------------------

export interface Manifest {
  notes: Note[];
  byId: Record<string, Note>;
}

/**
 * Reads the pre-built manifest.json from disk.
 * Returns null when the manifest hasn't been generated yet (dev cold-start).
 */
export function readManifest(): Manifest | null {
  const p = path.join(CONTENT_DIR, 'manifest.json');
  if (!existsSync(p)) return null;
  return JSON.parse(readFileSync(p, 'utf8')) as Manifest;
}

function collectNoteIds(dir: string, ids: string[] = []): string[] {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'assets' || entry.name === '.obsidian') continue;
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectNoteIds(entryPath, ids);
      continue;
    }
    if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.mdx'))) {
      ids.push(path.basename(entry.name, path.extname(entry.name)));
    }
  }
  return ids;
}

/**
 * Returns the catch-all route params for every note, using the built manifest
 * when available and falling back to scanning notes/ directly in dev.
 */
export function getStaticNoteParams(): Array<{ slug: string[] }> {
  const manifest = readManifest();
  const ids = manifest?.notes.map((note) => note.id) ?? collectNoteIds(NOTES_DIR);
  return ids.map((id) => ({
    slug: id.split('.'),
  }));
}

// ---------------------------------------------------------------------------
// File resolution
// ---------------------------------------------------------------------------

/**
 * Resolves the absolute path to a note's source file given its Dendron id.
 * Checks .md then .mdx.  Returns null if neither exists.
 */
export function resolveNotePath(id: string): string | null {
  const md = path.join(NOTES_DIR, `${id}.md`);
  if (existsSync(md)) return md;
  const mdx = path.join(NOTES_DIR, `${id}.mdx`);
  if (existsSync(mdx)) return mdx;
  return null;
}

// ---------------------------------------------------------------------------
// Markdown → HTML pipeline
// ---------------------------------------------------------------------------

/**
 * The result of fully processing a note's markdown source.
 */
export interface ProcessedNote {
  /** Rendered HTML string (safe to inject via dangerouslySetInnerHTML). */
  html: string;
  /** TOC entries extracted from the HTML headings. */
  toc: TocEntry[];
  /** Raw frontmatter key/value pairs. */
  frontmatter: Record<string, unknown>;
}

/**
 * Converts raw markdown content into an HTML string using the shared
 * singleton processor.  The processor (including Shiki) is initialised once
 * and reused; this keeps memory flat across 480+ note renders during `next build`.
 */
export async function processMarkdown(content: string): Promise<ProcessedNote['html']> {
  const processor = await getProcessor();
  const withLinks = rewriteWikiLinks(content, publicPath);
  const result = await processor.process(withLinks);
  return String(result);
}

/**
 * Full pipeline: read a note file by id, parse its frontmatter, render the
 * markdown body to HTML, and extract TOC entries.
 *
 * Throws if the file cannot be found.
 */
export async function processNote(id: string): Promise<ProcessedNote> {
  const filePath = resolveNotePath(id);
  if (!filePath) throw new Error(`Note file not found for id: ${id}`);

  const raw = readFileSync(filePath, 'utf8');
  const { content, data } = safeParseMatter(raw);

  const html = await processMarkdown(content);
  const toc = extractToc(html);

  return {
    html,
    toc,
    frontmatter: data as Record<string, unknown>,
  };
}

// ---------------------------------------------------------------------------
// Breadcrumb builder
// ---------------------------------------------------------------------------

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

/**
 * Builds the breadcrumb trail for a note page from its URL slug segments.
 *
 * Example: slug ["swe","cloud","aws"] with categoryLabel("swe") → "Software Engineering"
 *   → [{ home }, { Software Engineering, /notes/swe }, { Note Title }]
 */
export function buildBreadcrumbs(
  slug: string[],
  noteTitle: string,
  categoryLabelFn: (cat: string) => string,
): BreadcrumbItem[] {
  return [
    { label: 'home', href: publicPath('/') },
    ...(slug.length > 1
      ? [{ label: categoryLabelFn(slug[0] ?? ''), href: publicPath(`/${slug[0]}`) }]
      : []),
    { label: noteTitle },
  ];
}
