import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { GardenBreadcrumb } from './garden-breadcrumb';

function waitForUpdate(el: Element): Promise<void> {
  return (el as unknown as { updateComplete: Promise<void> }).updateComplete;
}

describe('garden-breadcrumb', () => {
  let el: HTMLElement;

  beforeEach(() => {
    el = document.createElement('garden-breadcrumb');
    document.body.appendChild(el);
  });

  afterEach(() => {
    document.body.removeChild(el);
  });

  it('renders a shadow root', async () => {
    await waitForUpdate(el);
    expect(el.shadowRoot).not.toBeNull();
  });

  it('renders a nav element for accessibility', async () => {
    await waitForUpdate(el);
    const nav = el.shadowRoot!.querySelector('nav');
    expect(nav).not.toBeNull();
    expect(nav!.getAttribute('aria-label')).toBe('Breadcrumb');
  });

  it('renders an ordered list inside', async () => {
    await waitForUpdate(el);
    expect(el.shadowRoot!.querySelector('ol')).not.toBeNull();
  });

  it('renders items from the items property', async () => {
    (el as unknown as { items: Array<{ label: string; href?: string }> }).items = [
      { label: 'home', href: '/' },
      { label: 'notes', href: '/notes' },
      { label: 'design system' },
    ];
    await waitForUpdate(el);
    const items = el.shadowRoot!.querySelectorAll('li');
    expect(items.length).toBe(3);
  });

  it('marks the last item as current page', async () => {
    (el as unknown as { items: Array<{ label: string; href?: string }> }).items = [
      { label: 'home', href: '/' },
      { label: 'notes' },
    ];
    await waitForUpdate(el);
    const currentEl = el.shadowRoot!.querySelector('[aria-current="page"]');
    expect(currentEl).not.toBeNull();
    expect(currentEl!.textContent?.trim()).toBe('notes');
  });

  it('uses the updated readable monospace baseline for breadcrumb items', async () => {
    await waitForUpdate(el);
    const styles = GardenBreadcrumb.styles;
    const styleText = Array.isArray(styles)
      ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
      : String(styles);
    expect(styleText).toContain('font-size: 13px');
  });
});
