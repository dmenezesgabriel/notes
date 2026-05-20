// @vitest-environment happy-dom

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it, vi } from 'vitest';

import { setCustomElementProperty } from '../lib/react-lit-adapter';
import { SiteSearch } from './site-search';

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
  useSearchParams: () => ({ get: (_: string) => '' }),
}));

describe('site-search contract', () => {
  it('setCustomElementProperty assigns label to a custom element', () => {
    const el = document.createElement('div') as HTMLDivElement & { label?: string };
    setCustomElementProperty(el, 'label', 'Search notes');
    expect(el.label).toBe('Search notes');
  });

  it('setCustomElementProperty assigns value (query) to a custom element', () => {
    const el = document.createElement('div') as HTMLDivElement & { value?: string };
    setCustomElementProperty(el, 'value', 'zettelkasten');
    expect(el.value).toBe('zettelkasten');
  });

  it('renders garden-search with the stable label and placeholder through the Suspense boundary', () => {
    const markup = renderToStaticMarkup(<SiteSearch />);
    expect(markup).toContain('label="Search notes"');
    expect(markup).toContain('placeholder="Search notes\u2026"');
    expect(markup).toContain('data-testid="site-search"');
  });
});
