import fg from 'fast-glob';
import fs from 'fs';
import matter from 'gray-matter';
import MiniSearch from 'minisearch';
import path from 'path';

export interface Note {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  outlinks: string[];
  backlinks: string[];
}

// ---------------------------------------------------------------------------
// Table-of-contents entry
// ---------------------------------------------------------------------------

/**
 * A single heading extracted from rendered HTML.
 * depth 1 = h2 (top-level section), depth 2 = h3 (sub-section).
 * Shared between `<garden-toc>` and the content extraction pipeline.
 */
export interface TocEntry {
  id: string;
  label: string;
  depth?: number;
  active?: boolean;
}

// ---------------------------------------------------------------------------
// Frontmatter parsing
// ---------------------------------------------------------------------------

/**
 * Parses a markdown file's YAML front matter, sanitising values that contain
 * unquoted colons (e.g. `title: Tag: AWS`) before gray-matter processes them.
 *
 * Returns `{ content, data }` — the same shape as `matter()`.
 */
export function safeParseMatter(raw: string): ReturnType<typeof matter> {
  try {
    return matter(raw);
  } catch {
    const fmMatch = raw.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/);
    if (fmMatch) {
      const lines = (fmMatch[1] ?? '').split(/\r?\n/).map((line) => {
        const m = line.match(/^(\s*[A-Za-z0-9_-]+):\s*(.+)$/);
        if (m) {
          const val = m[2] ?? '';
          if (val.includes(':') && !/^['"]/.test(val)) {
            return `${m[1]}: "${val.replace(/"/g, '\\"')}"`;
          }
        }
        return line;
      });
      const sanitised = raw.replace(fmMatch[1] ?? '', lines.join('\n'));
      try {
        return matter(sanitised);
      } catch {
        return {
          content: raw,
          data: {},
          orig: raw,
          language: 'yaml',
          matter: '',
          stringify: () => raw,
        };
      }
    }
    return {
      content: raw,
      data: {},
      orig: raw,
      language: 'yaml',
      matter: '',
      stringify: () => raw,
    };
  }
}

// ---------------------------------------------------------------------------
// Wiki-link rewriting
// ---------------------------------------------------------------------------

/**
 * Replaces Dendron `[[Target]]` / `[[Target|Alias]]` wiki-links with
 * standard Markdown `[display](/path)` links.
 */
export function rewriteWikiLinks(content: string): string {
  return content.replace(
    /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g,
    (_match, targetRaw: string, alias?: string) => {
      const target = targetRaw.trim();
      const display = (alias?.trim() || target.split('.').at(-1) || target).trim();
      const href = '/' + target.split('.').join('/');
      return `[${display}](${href})`;
    },
  );
}

// ---------------------------------------------------------------------------
// TOC extraction
// ---------------------------------------------------------------------------

/**
 * Extracts h2/h3 headings from an HTML string produced by remark/rehype.
 * Requires rehype-slug to have added `id` attributes first.
 */
export function extractToc(html: string): TocEntry[] {
  const entries: TocEntry[] = [];
  const re = /<(h[23])[^>]* id="([^"]+)"[^>]*>([\s\S]*?)<\/h[23]>/gi;
  let match;
  while ((match = re.exec(html)) !== null) {
    const tag = (match[1] ?? '').toLowerCase();
    const id = match[2] ?? '';
    const rawLabel = (match[3] ?? '').replace(/<[^>]+>/g, '').trim();
    entries.push({ id, label: rawLabel, depth: tag === 'h2' ? 1 : 2 });
  }
  return entries;
}

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// Excerpt cleaning
// ---------------------------------------------------------------------------

/** Returns a clean plain-text excerpt capped at `maxLen` characters. */
export function cleanExcerpt(raw: string, maxLen = 200): string {
  const stripped = raw
    .replace(/---[\s\S]*?---/, '') // YAML front matter
    .replace(/^#+\s+/gm, '') // headings
    .replace(/\[([^\]]*)]\([^)]*\)/g, '$1') // [text](url) → text
    .replace(
      /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g,
      (_: string, id: string, label: string) => label || id.split('.').at(-1) || id,
    ) // [[wiki|label]] → label
    .replace(/^[-*+]\s+/gm, '') // bullet list markers
    .replace(/^\d+\.\s+/gm, '') // ordered list markers
    .replace(/https?:\/\/\S+/g, '') // bare URLs
    .replace(/[#*_`[\]()\\|]/g, '') // remaining special chars
    .replace(/\s+/g, ' ') // collapse whitespace
    .trim();
  if (stripped.length <= maxLen) return stripped;
  return stripped.slice(0, maxLen).replace(/\s+\S*$/, '') + '…';
}

// ---------------------------------------------------------------------------
// Manifest interface
// ---------------------------------------------------------------------------

export interface Manifest {
  notes: Note[];
  byId: Record<string, Note>;
}

function findNotesDir(startDir = process.cwd()): string {
  let dir = startDir;
  for (let i = 0; i < 8; i++) {
    const candidate = path.join(dir, 'notes');
    if (fs.existsSync(candidate) && fs.statSync(candidate).isDirectory()) {
      return candidate;
    }
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  throw new Error('notes directory not found (looked up from ' + startDir + ')');
}

function normalizeIdFromFile(filePath: string): string {
  return path.basename(filePath, path.extname(filePath));
}

function idToSlug(id: string): string {
  return '/notes/' + id.split('.').join('/');
}

export async function buildContent(opts: { notesDir?: string; outDir?: string } = {}) {
  const notesDir = opts.notesDir || findNotesDir();
  const outDir = opts.outDir || path.resolve(process.cwd(), '..', '..', 'apps', 'site', '.content');

  console.info('[content] notesDir=', notesDir);
  console.info('[content] outDir=', outDir);

  const entries = await fg(['**/*.{md,mdx}'], {
    cwd: notesDir,
    absolute: true,
    dot: true,
    ignore: ['**/assets/**', '**/.obsidian/**'],
  });

  const notes: Note[] = [];
  const docsForIndex: Array<{ id: string; title: string; content: string; slug: string }> = [];
  const idMap = new Map<string, Note>();

  for (const file of entries) {
    const raw = fs.readFileSync(file, 'utf8');

    // sanitize frontmatter values that contain unquoted colons (e.g. "title: Tag: AWS")
    let rawForMatter = raw;
    const fmMatch = raw.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/);
    if (fmMatch) {
      const fm = fmMatch[1] ?? '';
      const lines = fm.split(/\r?\n/);
      const newLines = lines.map((line) => {
        const m = line.match(/^(\s*[A-Za-z0-9_-]+):\s*(.+)$/);
        if (m) {
          const key = m[1] ?? '';
          const val = m[2] ?? '';
          if (val.includes(':') && !/^['"]/.test(val)) {
            return `${key}: "${val.replace(/"/g, '\\"')}"`;
          }
        }
        return line;
      });
      rawForMatter = raw.replace(fm, newLines.join('\n'));
    }

    const parsed = matter(rawForMatter);
    const content = parsed.content || '';
    const id = normalizeIdFromFile(file);
    const slug = idToSlug(id);
    const title =
      (parsed.data && (parsed.data.title as string | undefined)) ?? id.split('.').at(-1) ?? id;
    // Strip markdown to clean plain text for the excerpt
    const cleaned = content
      .replace(/^#+\s+/gm, '') // headings
      .replace(/\[([^\]]*)]\([^)]*\)/g, '$1') // [text](url) → text
      .replace(
        /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g,
        (_: string, id: string, label: string) => label || id.split('.').at(-1) || id,
      ) // [[wiki|label]] → label
      .replace(/^[-*+]\s+/gm, '') // bullet markers
      .replace(/^\d+\.\s+/gm, '') // ordered list markers
      .replace(/https?:\/\/\S+/g, '') // bare URLs
      .replace(/[`*_|\\]/g, '') // inline formatting chars
      .replace(/\s+/g, ' ') // collapse whitespace
      .trim();
    const excerpt = cleaned.slice(0, 300);

    // extract wiki-links
    const outlinks: string[] = [];
    const wikiRE = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
    let m;
    while ((m = wikiRE.exec(raw)) !== null) {
      const targetRaw = (m[1] || '').trim();
      const targetId = targetRaw.replace(/\//g, '.').replace(/^\./, '');
      if (targetId) outlinks.push(targetId);
    }

    const note: Note = { id, slug, title, excerpt, outlinks, backlinks: [] };
    notes.push(note);
    idMap.set(id, note);
    docsForIndex.push({ id, title, content, slug });
  }

  // compute backlinks
  for (const note of notes) {
    for (const target of note.outlinks) {
      const targetNote = idMap.get(target);
      if (targetNote) targetNote.backlinks.push(note.id);
    }
  }

  fs.mkdirSync(outDir, { recursive: true });

  // manifest — metadata only, no content, no file copies
  const manifest: Manifest = {
    notes,
    byId: Object.fromEntries(notes.map((n) => [n.id, n])),
  };
  fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');

  // search index — MiniSearch serialised; slim docs (id/title/slug only) for result display
  const miniSearch = new MiniSearch({
    fields: ['title', 'content'],
    storeFields: ['title', 'slug'],
  });
  miniSearch.addAll(docsForIndex.map((d) => ({ id: d.id, title: d.title, content: d.content })));
  const indexJson = {
    index: miniSearch.toJSON(),
    docs: notes.map((n) => ({ id: n.id, title: n.title, slug: n.slug })),
  };
  fs.writeFileSync(path.join(outDir, 'index.json'), JSON.stringify(indexJson, null, 2), 'utf8');

  console.info(`[content] wrote manifest + search index for ${notes.length} notes → ${outDir}`);
  console.info('[content] notes are read at render time directly from', notesDir);
  return { notesCount: notes.length, outDir };
}

if (require.main === module) {
  (async () => {
    const argv = process.argv.slice(2);
    const outArgIndex = argv.indexOf('--out');
    const notesArgIndex = argv.indexOf('--notes');
    const outVal = outArgIndex !== -1 ? argv[outArgIndex + 1] : undefined;
    const notesVal = notesArgIndex !== -1 ? argv[notesArgIndex + 1] : undefined;
    const out = outVal !== undefined ? path.resolve(outVal) : undefined;
    const notesArg = notesVal !== undefined ? path.resolve(notesVal) : undefined;
    try {
      await buildContent({
        ...(notesArg !== undefined ? { notesDir: notesArg } : {}),
        ...(out !== undefined ? { outDir: out } : {}),
      });
      process.exit(0);
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  })();
}
