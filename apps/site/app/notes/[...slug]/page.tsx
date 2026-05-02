import type { Note } from '@notes/content';
import { existsSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import path from 'path';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

import { SiteBreadcrumb } from '../../components/site-breadcrumb';
import { SiteToc } from '../../components/site-toc';
import { categoryLabel, extractToc, rewriteWikiLinks } from '../../lib/notes';

// Notes live at {repo-root}/notes — from apps/site that is ../../notes
const NOTES_DIR = path.join(process.cwd(), '..', '..', 'notes');
const CONTENT_DIR = path.join(process.cwd(), '.content');

interface Manifest {
  notes: Note[];
  byId: Record<string, Note>;
}

/** Sanitises frontmatter with unquoted colons before parsing with gray-matter. */
function safeParseMatter(raw: string) {
  try {
    return matter(raw);
  } catch {
    // Attempt sanitisation: quote values containing bare colons
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
        return { content: raw, data: {} };
      }
    }
    return { content: raw, data: {} };
  }
}

function readManifest(): Manifest | null {
  const p = path.join(CONTENT_DIR, 'manifest.json');
  if (!existsSync(p)) return null;
  return JSON.parse(readFileSync(p, 'utf8'));
}

function resolveNotePath(id: string): string | null {
  const md = path.join(NOTES_DIR, `${id}.md`);
  if (existsSync(md)) return md;
  const mdx = path.join(NOTES_DIR, `${id}.mdx`);
  if (existsSync(mdx)) return mdx;
  return null;
}

export async function generateStaticParams() {
  const manifest = readManifest();
  if (!manifest) return [];
  return manifest.notes.map((note) => ({
    slug: note.slug.replace(/^\/notes\//, '').split('/'),
  }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const id = slug.join('.');
  const manifest = readManifest();
  const note = manifest?.byId?.[id];
  return {
    title: note?.title ?? id,
    description: note?.excerpt?.slice(0, 160),
  };
}

export default async function NotePage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const id = slug.join('.');

  const manifest = readManifest();
  const note = manifest?.byId?.[id];
  if (!note) return notFound();

  const filePath = resolveNotePath(id);
  if (!filePath) return notFound();

  const raw = readFileSync(filePath, 'utf8');
  const { content, data: frontmatter } = safeParseMatter(raw);
  const withLinks = rewriteWikiLinks(content);

  const processed = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug) // adds id="" to h2/h3 for anchor links + TOC
    .use(rehypeStringify)
    .process(withLinks);

  const htmlString = String(processed);
  const toc = extractToc(htmlString);

  // Build breadcrumb items from the slug segments
  const breadcrumbItems = [
    { label: 'home', href: '/' },
    ...(slug.length > 1
      ? [
          {
            label: categoryLabel(slug[0] ?? ''),
            href: `/notes/${slug[0]}`,
          },
        ]
      : []),
    { label: note.title },
  ];

  const hasToc = toc.length > 2;
  const hasBacklinks = note.backlinks.length > 0;

  return (
    <main style={{ padding: 'var(--space-5) 0 var(--space-8)' }}>
      <div className="page-wrap">
        {/* ── Breadcrumb ──────────────────────────────────────────── */}
        <SiteBreadcrumb items={breadcrumbItems} />

        {/* ── Article + Sidebar layout ───────────────────────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: hasToc ? '1fr minmax(160px, 200px)' : '1fr',
            gap: 'var(--space-6)',
            alignItems: 'start',
            marginTop: 'var(--space-4)',
          }}
        >
          {/* Article */}
          <article aria-labelledby="note-title">
            {/* Meta bar */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--space-3)',
                alignItems: 'center',
                marginBottom: 'var(--space-3)',
              }}
            >
              {slug[0] && <garden-tag variant="sage">{categoryLabel(slug[0])}</garden-tag>}
              {(frontmatter as Record<string, unknown>).status != null && (
                <garden-tag variant="default">
                  {String((frontmatter as Record<string, unknown>).status)}
                </garden-tag>
              )}
            </div>

            {/* Title */}
            <h1
              id="note-title"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(24px, 4vw, 36px)',
                fontWeight: 500,
                letterSpacing: '-0.025em',
                lineHeight: 1.15,
                color: 'var(--ds-ink)',
                margin: '0 0 1.5rem',
              }}
            >
              {note.title}
            </h1>

            {/* Prose content */}
            <div className="prose" dangerouslySetInnerHTML={{ __html: htmlString }} />

            {/* Backlinks */}
            {hasBacklinks && (
              <aside
                aria-label="Notes that link here"
                style={{
                  marginTop: 'var(--space-7)',
                  paddingTop: 'var(--space-5)',
                  borderTop: '1px solid var(--ds-border)',
                }}
              >
                <h2
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: 13,
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--ds-muted)',
                    margin: '0 0 var(--space-3)',
                  }}
                >
                  Linked from
                </h2>
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 'var(--space-2)',
                  }}
                >
                  {note.backlinks.map((bl) => {
                    const blNote = manifest?.byId?.[bl];
                    return blNote ? (
                      <li key={bl}>
                        <garden-tag href={blNote.slug} variant="default">
                          {blNote.title}
                        </garden-tag>
                      </li>
                    ) : null;
                  })}
                </ul>
              </aside>
            )}
          </article>

          {/* Sidebar TOC */}
          {hasToc && (
            <aside aria-label="Table of contents" style={{ position: 'sticky', top: 72 }}>
              <SiteToc items={toc} />
            </aside>
          )}
        </div>
      </div>
    </main>
  );
}
