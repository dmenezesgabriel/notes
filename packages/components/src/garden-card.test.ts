import './garden-card';

import { afterEach, beforeEach, describe, expect, it } from 'vitest';

function waitForUpdate(el: Element): Promise<void> {
  return (el as unknown as { updateComplete: Promise<void> }).updateComplete;
}

describe('garden-card', () => {
  let el: HTMLElement;

  beforeEach(() => {
    el = document.createElement('garden-card');
    document.body.appendChild(el);
  });

  afterEach(() => {
    document.body.removeChild(el);
  });

  it('renders a shadow root', async () => {
    await waitForUpdate(el);
    expect(el.shadowRoot).not.toBeNull();
  });

  it('renders an article element', async () => {
    await waitForUpdate(el);
    expect(el.shadowRoot!.querySelector('article')).not.toBeNull();
  });

  it('renders the headline property', async () => {
    el.setAttribute('headline', 'On building a second brain');
    await waitForUpdate(el);
    const h = el.shadowRoot!.querySelector('[part="headline"]');
    expect(h).not.toBeNull();
    expect(h!.textContent).toBe('On building a second brain');
  });

  it('renders the meta property', async () => {
    el.setAttribute('meta', '3 days ago · 8 min read');
    await waitForUpdate(el);
    const m = el.shadowRoot!.querySelector('[part="meta"]');
    expect(m).not.toBeNull();
    expect(m!.textContent).toBe('3 days ago · 8 min read');
  });

  it('renders the excerpt property', async () => {
    el.setAttribute('excerpt', 'The goal is to think better.');
    await waitForUpdate(el);
    const e = el.shadowRoot!.querySelector('[part="excerpt"]');
    expect(e).not.toBeNull();
    expect(e!.textContent).toBe('The goal is to think better.');
  });

  it('applies featured variant', async () => {
    el.setAttribute('variant', 'featured');
    await waitForUpdate(el);
    const article = el.shadowRoot!.querySelector('article')!;
    expect(article.classList.contains('featured')).toBe(true);
  });

  it('applies wiki variant', async () => {
    el.setAttribute('variant', 'wiki');
    await waitForUpdate(el);
    const article = el.shadowRoot!.querySelector('article')!;
    expect(article.classList.contains('wiki')).toBe(true);
  });

  it('renders footer slot for tags', async () => {
    await waitForUpdate(el);
    expect(el.shadowRoot!.querySelector('[part="footer"]')).not.toBeNull();
  });

  it('makes the headline a link when href is provided', async () => {
    el.setAttribute('href', '/notes/second-brain');
    el.setAttribute('headline', 'Second Brain');
    await waitForUpdate(el);
    const a = el.shadowRoot!.querySelector('a[part="headline"]');
    expect(a).not.toBeNull();
    expect(a!.getAttribute('href')).toBe('/notes/second-brain');
  });
});
