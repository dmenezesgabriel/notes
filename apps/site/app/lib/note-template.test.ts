import type { Note } from '@notes/content';
import { describe, expect, it } from 'vitest';

import { getNoteTemplateState, resolveNoteBacklinks } from './note-template';

describe('note template helpers', () => {
  it('omits optional note regions when toc and backlinks are absent', () => {
    expect(getNoteTemplateState([], [])).toEqual({
      hasSidebar: false,
      hasBacklinks: false,
    });
  });

  it('enables optional note regions when toc and backlinks are present', () => {
    expect(
      getNoteTemplateState(
        [
          { id: 'intro', label: 'Introduction', depth: 1 },
          { id: 'details', label: 'Details', depth: 2 },
          { id: 'more', label: 'More', depth: 1 },
        ],
        [{ id: 'linked-note', slug: '/linked-note', title: 'Linked Note' }],
      ),
    ).toEqual({
      hasSidebar: true,
      hasBacklinks: true,
    });
  });

  it('filters missing backlink ids when resolving backlink notes', () => {
    const notesById: Record<string, Note> = {
      'linked-note': {
        id: 'linked-note',
        slug: '/linked-note',
        title: 'Linked Note',
        excerpt: '',
        outlinks: [],
        backlinks: [],
      },
    };

    expect(resolveNoteBacklinks(['linked-note', 'missing-note'], notesById)).toEqual([
      {
        id: 'linked-note',
        slug: '/linked-note',
        title: 'Linked Note',
      },
    ]);
  });
});
