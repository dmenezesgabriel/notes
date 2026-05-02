import './garden-toc';

import { afterEach, beforeEach, describe, expect, it } from 'vitest';

function waitForUpdate(el: Element): Promise<void> {
  return (el as unknown as { updateComplete: Promise<void> }).updateComplete;
}

interface TocEntry {
  id: string;
  label: string;
  depth?: number;
  active?: boolean;
}

describe('garden-toc', () => {
  let el: HTMLElement;

  beforeEach(() => {
    el = document.createElement('garden-toc');
    document.body.appendChild(el);
  });

  afterEach(() => {
    document.body.removeChild(el);
  });

  it('renders a shadow root', async () => {
    await waitForUpdate(el);
    expect(el.shadowRoot).not.toBeNull();
  });

  it('renders a nav element with aria-label', async () => {
    await waitForUpdate(el);
    const nav = el.shadowRoot!.querySelector('nav');
    expect(nav).not.toBeNull();
    expect(nav!.getAttribute('aria-label')).toBe('Table of contents');
  });

  it('renders the heading title', async () => {
    await waitForUpdate(el);
    const title = el.shadowRoot!.querySelector('[part="title"]');
    expect(title).not.toBeNull();
    expect(title!.textContent).toBe('On this page');
  });

  it('renders a custom heading title', async () => {
    el.setAttribute('heading', 'Contents');
    await waitForUpdate(el);
    const title = el.shadowRoot!.querySelector('[part="title"]');
    expect(title!.textContent).toBe('Contents');
  });

  it('renders items as links', async () => {
    (el as unknown as { items: TocEntry[] }).items = [
      { id: 'intro', label: 'Introduction' },
      { id: 'capture', label: 'The capture habit', depth: 2 },
    ];
    await waitForUpdate(el);
    const links = el.shadowRoot!.querySelectorAll('a');
    expect(links.length).toBe(2);
    expect(links[0]!.getAttribute('href')).toBe('#intro');
  });

  it('marks active item with aria-current="true"', async () => {
    (el as unknown as { items: TocEntry[] }).items = [
      { id: 'intro', label: 'Introduction', active: true },
      { id: 'capture', label: 'Capture' },
    ];
    await waitForUpdate(el);
    const activeLink = el.shadowRoot!.querySelector('a[aria-current="true"]');
    expect(activeLink).not.toBeNull();
    expect(activeLink!.getAttribute('href')).toBe('#intro');
  });

  it('indents depth-2 items', async () => {
    (el as unknown as { items: TocEntry[] }).items = [
      { id: 'intro', label: 'Introduction' },
      { id: 'sub', label: 'Subsection', depth: 2 },
    ];
    await waitForUpdate(el);
    const items = el.shadowRoot!.querySelectorAll('[part="item"]');
    expect(items[1]!.classList.contains('depth-2')).toBe(true);
  });
});
