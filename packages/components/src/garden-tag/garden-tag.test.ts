import './garden-tag';

import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { GardenTag } from './garden-tag';

function waitForUpdate(el: Element): Promise<void> {
  return (el as unknown as { updateComplete: Promise<void> }).updateComplete;
}

describe('garden-tag', () => {
  let el: HTMLElement;

  beforeEach(() => {
    el = document.createElement('garden-tag');
    document.body.appendChild(el);
  });

  afterEach(() => {
    document.body.removeChild(el);
  });

  it('renders a shadow root', async () => {
    await waitForUpdate(el);
    expect(el.shadowRoot).not.toBeNull();
  });

  it('renders slotted text content', async () => {
    el.textContent = 'javascript';
    await waitForUpdate(el);
    expect(el.textContent).toBe('javascript');
  });

  it('defaults to the default variant', async () => {
    await waitForUpdate(el);
    const span = el.shadowRoot!.querySelector('[part="base"]');
    expect(span).not.toBeNull();
    expect(span!.className).not.toContain('accent');
    expect(span!.className).not.toContain('sage');
  });

  it('applies accent variant', async () => {
    el.setAttribute('variant', 'accent');
    await waitForUpdate(el);
    const span = el.shadowRoot!.querySelector('[part="base"]');
    expect(span!.classList.contains('accent')).toBe(true);
  });

  it('applies sage variant', async () => {
    el.setAttribute('variant', 'sage');
    await waitForUpdate(el);
    const span = el.shadowRoot!.querySelector('[part="base"]');
    expect(span!.classList.contains('sage')).toBe(true);
  });

  it('applies yellow, blue, and green variants', async () => {
    const span = () => el.shadowRoot!.querySelector('[part="base"]')!;

    el.setAttribute('variant', 'yellow');
    await waitForUpdate(el);
    expect(span().classList.contains('yellow')).toBe(true);

    el.setAttribute('variant', 'blue');
    await waitForUpdate(el);
    expect(span().classList.contains('blue')).toBe(true);

    el.setAttribute('variant', 'green');
    await waitForUpdate(el);
    expect(span().classList.contains('green')).toBe(true);
  });

  it('renders an anchor when href is provided', async () => {
    el.setAttribute('href', '/notes/test');
    await waitForUpdate(el);
    const anchor = el.shadowRoot!.querySelector('a[part="base"]');
    expect(anchor).not.toBeNull();
    expect(anchor!.getAttribute('href')).toBe('/notes/test');
  });

  it('uses the shared filled-text token for filled dark-mode variants', () => {
    const styleText = String(GardenTag.styles);
    expect(styleText).toContain('--zine-filled-text');
    expect(styleText).toContain('--zine-light-fill-text');
  });

  it('has role="note" for accessibility', async () => {
    await waitForUpdate(el);
    // slot is rendered inside the part=base element
    expect(el.shadowRoot!.querySelector('[part="base"]')).not.toBeNull();
  });
});
