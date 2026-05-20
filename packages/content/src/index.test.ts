import { describe, expect, it } from 'vitest';

import { rewriteWikiLinks } from './index';

describe('rewriteWikiLinks', () => {
  it('converts a simple wiki-link to a markdown link using the default identity builder', () => {
    expect(rewriteWikiLinks('See [[swe.cloud.aws]]')).toBe('See [aws](/swe/cloud/aws)');
  });

  it('uses the display alias when provided', () => {
    expect(rewriteWikiLinks('See [[swe.cloud.aws|AWS Notes]]')).toBe(
      'See [AWS Notes](/swe/cloud/aws)',
    );
  });

  it('applies the buildHref callback to produce site-public URLs', () => {
    const buildHref = (p: string) => `/notes${p}/`;
    expect(rewriteWikiLinks('See [[swe.cloud.aws]]', buildHref)).toBe(
      'See [aws](/notes/swe/cloud/aws/)',
    );
  });

  it('rewrites multiple wiki-links in one pass', () => {
    const buildHref = (p: string) => `/notes${p}/`;
    const input = '[[books.a-philosophy-of-software-design]] and [[swe.cloud.aws|AWS]]';
    const result = rewriteWikiLinks(input, buildHref);
    expect(result).toContain(
      '[a-philosophy-of-software-design](/notes/books/a-philosophy-of-software-design/)',
    );
    expect(result).toContain('[AWS](/notes/swe/cloud/aws/)');
  });
});
