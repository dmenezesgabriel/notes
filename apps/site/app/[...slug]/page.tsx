import { notFound } from 'next/navigation';

import { SiteBreadcrumb } from '../components/site-breadcrumb';
import { SiteToc } from '../components/site-toc';
import {
  buildBreadcrumbs,
  getStaticNoteParams,
  processNote,
  readManifest,
} from '../lib/note-processor';
import { categoryLabel } from '../lib/notes';
import { publicPath } from '../lib/site-path';

export async function generateStaticParams() {
  return getStaticNoteParams();
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

  // Render markdown → HTML, extract TOC, parse frontmatter
  let processed;
  try {
    processed = await processNote(id);
  } catch {
    return notFound();
  }
  const { html, toc, frontmatter } = processed;

  const breadcrumbItems = buildBreadcrumbs(slug, note.title, categoryLabel);
  const hasToc = toc.length > 2;
  const hasBacklinks = note.backlinks.length > 0;

  return (
    <main style={{ padding: 'var(--space-5) 0 var(--space-8)' }}>
      <div className="page-wrap">
        {/*
         * <garden-article> owns the layout grid, h1 title, meta row,
         * backlinks section, and sidebar placement.
         * All content is slotted from the light DOM so globals.css prose
         * styles apply without any shadow-DOM workarounds.
         */}
        <garden-article
          suppressHydrationWarning
          title={note.title}
          has-sidebar={hasToc ? '' : undefined}
          has-backlinks={hasBacklinks ? '' : undefined}
        >
          {/* Breadcrumb */}
          <div slot="breadcrumb">
            <SiteBreadcrumb items={breadcrumbItems} />
          </div>

          {/* Meta tags */}
          {slug[0] && (
            <garden-tag suppressHydrationWarning slot="meta" variant="sage">
              {categoryLabel(slug[0]).toUpperCase()}
            </garden-tag>
          )}
          {frontmatter.status != null && (
            <garden-tag suppressHydrationWarning slot="meta" variant="default">
              {String(frontmatter.status).toUpperCase()}
            </garden-tag>
          )}

          {/* Rendered prose — .prose class is styled by globals.css */}
          <div slot="content" className="prose" dangerouslySetInnerHTML={{ __html: html }} />

          {/* TOC sidebar */}
          {hasToc && <SiteToc slot="sidebar" items={toc} />}

          {/* Backlinks */}
          {hasBacklinks &&
            note.backlinks.map((bl) => {
              const blNote = manifest?.byId?.[bl];
              return blNote ? (
                <li key={bl} slot="backlinks">
                  <garden-tag
                    suppressHydrationWarning
                    href={publicPath(blNote.slug)}
                    variant="default"
                  >
                    {blNote.title}
                  </garden-tag>
                </li>
              ) : null;
            })}
        </garden-article>
      </div>
    </main>
  );
}
