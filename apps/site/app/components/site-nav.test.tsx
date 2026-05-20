// @vitest-environment happy-dom

import '@notes/components';

import React, { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import type { GardenNavElement } from '../lib/react-lit-adapter';
import { publicPath } from '../lib/site-path';
import { SiteNav } from './site-nav';

let mockPathname = '/';

vi.mock('next/navigation', () => ({
  usePathname: () => mockPathname,
}));

interface RenderedGardenNav extends GardenNavElement {
  updateComplete: Promise<void>;
  shadowRoot: ShadowRoot;
}

declare global {
  var IS_REACT_ACT_ENVIRONMENT: boolean | undefined;
}

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

describe('SiteNav', () => {
  let container: HTMLDivElement;
  let root: Root;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  afterEach(async () => {
    await act(async () => {
      root.unmount();
    });
    container.remove();
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    window.history.replaceState({}, '', 'http://localhost/');
  });

  async function renderSiteNav(routePath: string): Promise<RenderedGardenNav> {
    mockPathname = routePath;
    window.history.replaceState({}, '', `http://localhost${publicPath(routePath)}`);

    await act(async () => {
      root.render(<SiteNav />);
    });

    const nav = container.querySelector('garden-nav') as RenderedGardenNav | null;
    if (!nav) {
      throw new Error('Expected SiteNav to render a garden-nav element.');
    }

    await nav.updateComplete;

    return nav;
  }

  it('assigns active links through the centralized adapter boundary for the current route', async () => {
    const nav = await renderSiteNav('/books');

    expect(nav.getAttribute('homehref')).toBe(publicPath('/'));
    expect(nav.links).toEqual([
      { label: 'notes', href: publicPath('/'), active: false },
      { label: 'books', href: publicPath('/books'), active: true },
    ]);

    const activeLink = nav.shadowRoot.querySelector('[part="link"][aria-current="page"]');
    expect(activeLink?.textContent?.trim()).toBe('BOOKS');
  });

  it('persists theme changes and syncs the toggle state from the document theme', async () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    const nav = await renderSiteNav('/');

    const darkThemeButton = nav.shadowRoot.querySelector('[part="theme-dark"]');
    expect(darkThemeButton?.getAttribute('aria-pressed')).toBe('true');

    nav.dispatchEvent(
      new CustomEvent('garden-theme-change', {
        detail: { theme: 'light' },
      }),
    );

    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    expect(localStorage.getItem('theme')).toBe('light');
  });
});
