import { describe, expect, it } from 'vitest';

import { getStaticNoteParams, processMarkdown } from './note-processor';

describe('getStaticNoteParams', () => {
  it('includes existing note ids from the generated manifest as catch-all params', () => {
    const params = getStaticNoteParams();

    expect(params).toContainEqual({
      slug: ['books', 'a-philosophy-of-software-design'],
    });
    expect(params).toContainEqual({
      slug: ['books', '14-habits-of-highly-productive-developers'],
    });
  });

  it('returns slug arrays without the public /notes prefix', () => {
    const params = getStaticNoteParams();
    const target = params.find(
      (entry) => entry.slug.join('.') === 'books.a-philosophy-of-software-design',
    );

    expect(target).toBeDefined();
    expect(target?.slug[0]).not.toBe('notes');
  });
});

describe('processMarkdown — wiki-link public-path contract', () => {
  it('renders wiki-links as /notes/... hrefs so rendered HTML obeys the public-path contract', async () => {
    const html = await processMarkdown('See [[swe.cloud.aws]] for details.');

    expect(html).toContain('href="/notes/swe/cloud/aws/"');
    expect(html).not.toContain('href="/swe/');
  });

  it('renders aliased wiki-links with the correct display text and /notes/... href', async () => {
    const html = await processMarkdown('See [[swe.cloud.aws|AWS Notes]] here.');

    expect(html).toContain('href="/notes/swe/cloud/aws/"');
    expect(html).toContain('>AWS Notes<');
  });
});
