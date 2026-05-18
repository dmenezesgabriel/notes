import type { TocEntry } from '@notes/content';
import React from 'react';

import type { BreadcrumbItem } from '../lib/note-processor';
import { getNoteTemplateState, type NoteBacklink } from '../lib/note-template';
import { categoryLabel } from '../lib/notes';
import { publicPath } from '../lib/site-path';
import { SiteBreadcrumb } from './site-breadcrumb';
import { SiteToc } from './site-toc';

interface NotePageSliceProps {
  title: string;
  slug: string[];
  html: string;
  toc: TocEntry[];
  breadcrumbItems: BreadcrumbItem[];
  backlinks: NoteBacklink[];
  status?: string | null;
}

/**
 * NotePageSlice — the shared note template/page composition boundary for the site app.
 * Keeps `garden-article` as the template shell while the route supplies real note data.
 */
export function NotePageSlice({
  title,
  slug,
  html,
  toc,
  breadcrumbItems,
  backlinks,
  status,
}: NotePageSliceProps) {
  const { hasSidebar, hasBacklinks } = getNoteTemplateState(toc, backlinks);

  return (
    <main style={{ padding: 'var(--space-5) 0 var(--space-8)' }}>
      <div className="page-wrap">
        <garden-article
          suppressHydrationWarning
          title={title}
          has-sidebar={hasSidebar ? '' : undefined}
          has-backlinks={hasBacklinks ? '' : undefined}
        >
          <SiteBreadcrumb slot="breadcrumb" items={breadcrumbItems} />

          {slug[0] && (
            <garden-tag suppressHydrationWarning slot="meta" variant="sage">
              {categoryLabel(slug[0]).toUpperCase()}
            </garden-tag>
          )}
          {status != null && (
            <garden-tag suppressHydrationWarning slot="meta" variant="default">
              {String(status).toUpperCase()}
            </garden-tag>
          )}

          <div slot="content" className="prose" dangerouslySetInnerHTML={{ __html: html }} />

          {hasSidebar && <SiteToc slot="sidebar" items={toc} />}

          {hasBacklinks &&
            backlinks.map((backlink) => (
              <li key={backlink.id} slot="backlinks">
                <garden-tag
                  suppressHydrationWarning
                  href={publicPath(backlink.slug)}
                  variant="default"
                >
                  {backlink.title}
                </garden-tag>
              </li>
            ))}
        </garden-article>
      </div>
    </main>
  );
}
