import './garden-nav';

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { GardenNav } from './garden-nav';

function waitForUpdate(el: Element): Promise<void> {
  return (el as unknown as { updateComplete: Promise<void> }).updateComplete;
}

interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

describe('garden-nav', () => {
  let el: HTMLElement;

  beforeEach(() => {
    el = document.createElement('garden-nav');
    document.body.appendChild(el);
  });

  afterEach(() => {
    document.body.removeChild(el);
  });

  it('renders a shadow root', async () => {
    await waitForUpdate(el);
    expect(el.shadowRoot).not.toBeNull();
  });

  it('renders a nav element', async () => {
    await waitForUpdate(el);
    expect(el.shadowRoot!.querySelector('nav')).not.toBeNull();
  });

  it('renders the brand property', async () => {
    el.setAttribute('brand', 'garden.dev');
    await waitForUpdate(el);
    const brand = el.shadowRoot!.querySelector('[part="brand"]');
    expect(brand).not.toBeNull();
    expect(brand!.textContent).toContain('garden.dev');
  });

  it('renders nav links from the links property', async () => {
    (el as unknown as { links: NavLink[] }).links = [
      { label: 'notes', href: '/notes', active: true },
      { label: 'wiki', href: '/wiki' },
      { label: 'about', href: '/about' },
    ];
    await waitForUpdate(el);
    const anchors = el.shadowRoot!.querySelectorAll('[part="link"]');
    expect(anchors.length).toBe(3);
  });

  it('marks the active link', async () => {
    (el as unknown as { links: NavLink[] }).links = [
      { label: 'notes', href: '/notes', active: true },
      { label: 'wiki', href: '/wiki' },
    ];
    await waitForUpdate(el);
    const activeLink = el.shadowRoot!.querySelector('[part="link"][aria-current="page"]');
    expect(activeLink).not.toBeNull();
    expect(activeLink!.textContent?.trim().toLowerCase()).toContain('notes');
  });

  it('emits garden-theme-change when toggle is clicked', async () => {
    await waitForUpdate(el);
    const handler = vi.fn();
    el.addEventListener('garden-theme-change', handler);
    const toggleBtn = el.shadowRoot!.querySelector('[part="theme-dark"]') as HTMLElement;
    toggleBtn?.click();
    expect(handler).toHaveBeenCalledOnce();
  });

  it('uses dedicated dark-mode nav tokens to keep active and inactive controls distinct', () => {
    const styleText = String(GardenNav.styles);
    expect(styleText).toContain('--nav-active-text');
    expect(styleText).toContain('--nav-active-bg');
    expect(styleText).toContain('--nav-link-color');
    expect(styleText).toContain('--nav-toggle-icon');
  });

  it('renders a header element as the banner landmark', async () => {
    await waitForUpdate(el);
    // <header> has implicit role="banner" — no explicit role needed
    expect(el.shadowRoot!.querySelector('header')).not.toBeNull();
  });
});
