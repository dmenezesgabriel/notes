import type { Note } from '@notes/content';
import { describe, expect, it } from 'vitest';

import { cleanExcerpt, getHomeDiscoveryState, searchNotes } from './home-discovery';

const notes: Note[] = [
  {
    id: 'books.a-philosophy-of-software-design',
    slug: '/books/a-philosophy-of-software-design',
    title: 'A Philosophy of Software Design',
    excerpt: 'A note about software design tradeoffs and complexity.',
    outlinks: [],
    backlinks: [],
  },
  {
    id: 'swe.lit-elements-vs-react',
    slug: '/swe/lit-elements-vs-react',
    title: 'Lit Elements vs React',
    excerpt: 'Software teams often compare portability, composition, and ergonomics.',
    outlinks: [],
    backlinks: [],
  },
];

describe('home discovery helpers', () => {
  it('cleans markdown-heavy excerpts for note cards', () => {
    const raw = `---\ntitle: Example\n---\n# Heading\nA [linked](https://example.com) note with [[books.a-philosophy-of-software-design|display text]].`;

    expect(cleanExcerpt(raw, 80)).toBe('Heading A linked note with display text.');
  });

  it('finds home search matches across title, excerpt, and note id', () => {
    expect(searchNotes('software', notes)).toHaveLength(2);
    expect(searchNotes('lit-elements-vs-react', notes)).toEqual([notes[1]]);
    expect(searchNotes('missing', notes)).toEqual([]);
  });

  it('distinguishes default, results, and no-results home states', () => {
    expect(getHomeDiscoveryState(notes, '')).toMatchObject({ mode: 'default', query: '' });
    expect(getHomeDiscoveryState(notes, 'react')).toMatchObject({
      mode: 'results',
      query: 'react',
    });
    expect(getHomeDiscoveryState(notes, 'no-hit')).toMatchObject({
      mode: 'no-results',
      query: 'no-hit',
    });
  });
});
