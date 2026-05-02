import { describe, expect, it } from 'vitest';

import {
  categoryLabel,
  extractToc,
  groupByCategory,
  noteSlugToSegments,
  rewriteWikiLinks,
} from './notes';

describe('groupByCategory', () => {
  const notes = [
    { id: 'books.foo', slug: '/books/foo', title: 'Foo', excerpt: '', outlinks: [], backlinks: [] },
    { id: 'books.bar', slug: '/books/bar', title: 'Bar', excerpt: '', outlinks: [], backlinks: [] },
    { id: 'swe.arch', slug: '/swe/arch', title: 'Arch', excerpt: '', outlinks: [], backlinks: [] },
    { id: 'root', slug: '/root', title: 'Root', excerpt: '', outlinks: [], backlinks: [] },
  ];

  it('groups notes by top-level category', () => {
    const result = groupByCategory(notes);
    expect(Object.keys(result)).toContain('books');
    expect(Object.keys(result)).toContain('swe');
    expect(result['books']!.length).toBe(2);
    expect(result['swe']!.length).toBe(1);
  });

  it('assigns single-segment ids to "root" category', () => {
    const result = groupByCategory(notes);
    expect(result['root']).toBeDefined();
    expect(result['root']!.length).toBe(1);
  });
});

describe('categoryLabel', () => {
  it('returns human-readable label for known categories', () => {
    expect(categoryLabel('books')).toBe('Books');
    expect(categoryLabel('swe')).toBe('Software Engineering');
    expect(categoryLabel('devops')).toBe('DevOps');
  });

  it('falls back to title-cased category name', () => {
    expect(categoryLabel('mycategory')).toBe('Mycategory');
  });
});

describe('rewriteWikiLinks', () => {
  it('converts [[Target]] to markdown link', () => {
    const result = rewriteWikiLinks('see [[books.foo]]');
    expect(result).toContain('[foo](/books/foo)');
  });

  it('converts [[Target|Alias]] to aliased markdown link', () => {
    const result = rewriteWikiLinks('see [[books.foo|My Book]]');
    expect(result).toContain('[My Book](/books/foo)');
  });

  it('leaves regular markdown links untouched', () => {
    const input = 'see [external](https://example.com)';
    expect(rewriteWikiLinks(input)).toBe(input);
  });

  it('handles multiple wiki links in one string', () => {
    const result = rewriteWikiLinks('[[books.a]] and [[swe.arch]]');
    expect(result).toContain('[a](/books/a)');
    expect(result).toContain('[arch](/swe/arch)');
  });
});

describe('extractToc', () => {
  const html = `
    <h2 id="intro">Introduction</h2>
    <p>some text</p>
    <h3 id="capture">The capture habit</h3>
    <h2 id="see-also">See also</h2>
  `;

  it('extracts h2 and h3 headings', () => {
    const toc = extractToc(html);
    expect(toc.length).toBe(3);
  });

  it('sets depth 1 for h2 and depth 2 for h3', () => {
    const toc = extractToc(html);
    const h2 = toc.find((t) => t.id === 'intro');
    const h3 = toc.find((t) => t.id === 'capture');
    expect(h2?.depth).toBe(1);
    expect(h3?.depth).toBe(2);
  });

  it('extracts label text', () => {
    const toc = extractToc(html);
    expect(toc.find((t) => t.id === 'intro')?.label).toBe('Introduction');
  });

  it('returns empty array for html with no headings', () => {
    expect(extractToc('<p>just a paragraph</p>')).toEqual([]);
  });
});

describe('noteSlugToSegments', () => {
  it('converts dot-notated id to path segments', () => {
    expect(noteSlugToSegments('books.foo')).toEqual(['books', 'foo']);
  });

  it('handles single-segment id', () => {
    expect(noteSlugToSegments('root')).toEqual(['root']);
  });
});
