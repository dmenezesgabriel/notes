import { describe, expect, it } from 'vitest';

import { linkPath, publicPath } from './site-path';

describe('publicPath', () => {
  it('keeps the /notes public home path', () => {
    expect(publicPath('/')).toBe('/notes/');
    expect(publicPath('/notes')).toBe('/notes/');
  });

  it('prefixes note routes with /notes and a trailing slash', () => {
    expect(publicPath('/books/a-philosophy-of-software-design')).toBe(
      '/notes/books/a-philosophy-of-software-design/',
    );
  });

  it('preserves search params and hash fragments', () => {
    expect(publicPath('/books/a-philosophy-of-software-design?q=search#toc')).toBe(
      '/notes/books/a-philosophy-of-software-design/?q=search#toc',
    );
  });

  it('normalizes an already-prefixed public path', () => {
    expect(publicPath('/notes/books/a-philosophy-of-software-design')).toBe(
      '/notes/books/a-philosophy-of-software-design/',
    );
  });
});

describe('linkPath', () => {
  it('keeps app-router home links root-relative', () => {
    expect(linkPath('/')).toBe('/');
    expect(linkPath('/notes')).toBe('/');
  });

  it('returns basePath-free note routes for Next.js links', () => {
    expect(linkPath('/books/a-philosophy-of-software-design')).toBe(
      '/books/a-philosophy-of-software-design/',
    );
  });

  it('preserves search params and hash fragments', () => {
    expect(linkPath('/notes/books/a-philosophy-of-software-design?q=search#toc')).toBe(
      '/books/a-philosophy-of-software-design/?q=search#toc',
    );
  });
});
