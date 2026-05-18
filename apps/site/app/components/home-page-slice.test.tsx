import type { Note } from '@notes/content';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { readManifest } from '../lib/note-processor';
import { HomePageSlice } from './home-page-slice';

function readRealNotes(): Note[] {
  const manifest = readManifest();
  if (!manifest) {
    throw new Error('Expected home discovery manifest to exist.');
  }
  return manifest.notes;
}

describe('HomePageSlice', () => {
  it('renders the default discovery state with hero content and note cards', () => {
    const notes = readRealNotes();
    const markup = renderToStaticMarkup(
      <HomePageSlice notes={notes} query="" searchSlot={<div data-testid="search-slot" />} />,
    );

    expect(markup).toContain('Site introduction');
    expect(markup).toContain('data-testid="search-slot"');
    expect(markup).toContain('KNOWLEDGE GARDEN');
    expect(markup).toContain('<garden-card');
    expect(markup).toContain('id="cat-books"');
  });

  it('keeps the search UI available in results and no-results states', () => {
    const notes = readRealNotes();

    const resultsMarkup = renderToStaticMarkup(
      <HomePageSlice
        notes={notes}
        query="software"
        searchSlot={<div data-testid="search-slot" />}
      />,
    );
    expect(resultsMarkup).toContain('RESULTS FOR');
    expect(resultsMarkup).toContain('data-testid="search-slot"');
    expect(resultsMarkup).toContain('<garden-card');

    const noResultsMarkup = renderToStaticMarkup(
      <HomePageSlice
        notes={notes}
        query="definitely-no-home-search-hit"
        searchSlot={<div data-testid="search-slot" />}
      />,
    );
    expect(noResultsMarkup).toContain('data-testid="search-slot"');
    expect(noResultsMarkup).toContain('No notes found for');
    expect(noResultsMarkup).toContain('✕ CLEAR');
  });
});
