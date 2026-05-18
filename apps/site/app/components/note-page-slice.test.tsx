import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { buildBreadcrumbs, processNote, readManifest } from '../lib/note-processor';
import { resolveNoteBacklinks } from '../lib/note-template';
import { categoryLabel } from '../lib/notes';
import { NotePageSlice } from './note-page-slice';

const NOTE_WITH_SIDEBAR_AND_BACKLINKS =
  'data-engineer.concepts.data-modeling.sql.data-modeling-cardinality';
const NOTE_WITHOUT_OPTIONAL_REGIONS = 'books.a-philosophy-of-software-design';

async function renderNotePageSlice(id: string) {
  const manifest = readManifest();
  const note = manifest?.byId?.[id];

  if (!manifest || !note) {
    throw new Error(`Expected note fixture to exist in manifest: ${id}`);
  }

  const processed = await processNote(id);
  const markup = renderToStaticMarkup(
    <NotePageSlice
      title={note.title}
      slug={id.split('.')}
      html={processed.html}
      toc={processed.toc}
      breadcrumbItems={buildBreadcrumbs(id.split('.'), note.title, categoryLabel)}
      backlinks={resolveNoteBacklinks(note.backlinks, manifest.byId)}
      status={processed.frontmatter.status != null ? String(processed.frontmatter.status) : null}
    />,
  );

  return {
    markup,
    note,
  };
}

describe('NotePageSlice', () => {
  it('composes the article template with real processed note data', async () => {
    const { markup, note } = await renderNotePageSlice(NOTE_WITH_SIDEBAR_AND_BACKLINKS);

    expect(markup).toContain('<garden-article');
    expect(markup).toContain(`title="${note.title}"`);
    expect(markup).toContain('has-sidebar=""');
    expect(markup).toContain('has-backlinks=""');
    expect(markup).toContain('data-testid="site-breadcrumb"');
    expect(markup).toContain('data-testid="site-toc"');
    expect(markup).toContain('slot="content"');
    expect(markup).toContain('slot="backlinks"');
    expect(markup).toContain('slot="meta"');
  });

  it('omits optional note regions in markup when sidebar and backlinks are absent', async () => {
    const { markup, note } = await renderNotePageSlice(NOTE_WITHOUT_OPTIONAL_REGIONS);

    expect(markup).toContain(`title="${note.title}"`);
    expect(markup).not.toContain('has-sidebar=""');
    expect(markup).not.toContain('has-backlinks=""');
    expect(markup).not.toContain('data-testid="site-toc"');
    expect(markup).not.toContain('slot="backlinks"');
  });
});
