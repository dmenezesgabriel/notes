import './garden-badge';

import { afterEach, beforeEach, describe, expect, it } from 'vitest';

function waitForUpdate(el: Element): Promise<void> {
  return (el as unknown as { updateComplete: Promise<void> }).updateComplete;
}

describe('garden-badge', () => {
  let el: HTMLElement;

  beforeEach(() => {
    el = document.createElement('garden-badge');
    document.body.appendChild(el);
  });

  afterEach(() => {
    document.body.removeChild(el);
  });

  it('renders a shadow root', async () => {
    await waitForUpdate(el);
    expect(el.shadowRoot).not.toBeNull();
  });

  it('renders slotted text', async () => {
    el.textContent = 'design system · v0.1';
    await waitForUpdate(el);
    expect(el.textContent).toBe('design system · v0.1');
  });

  it('renders the base part', async () => {
    await waitForUpdate(el);
    expect(el.shadowRoot!.querySelector('[part="base"]')).not.toBeNull();
  });

  it('applies accent variant by default', async () => {
    await waitForUpdate(el);
    const base = el.shadowRoot!.querySelector('[part="base"]')!;
    // default has accent color
    expect(base.className).not.toContain('sage');
  });

  it('applies sage variant', async () => {
    el.setAttribute('variant', 'sage');
    await waitForUpdate(el);
    const base = el.shadowRoot!.querySelector('[part="base"]')!;
    expect(base.classList.contains('sage')).toBe(true);
  });

  it('applies muted, yellow, and blue variants', async () => {
    const base = () => el.shadowRoot!.querySelector('[part="base"]')!;

    el.setAttribute('variant', 'muted');
    await waitForUpdate(el);
    expect(base().classList.contains('muted')).toBe(true);

    el.setAttribute('variant', 'yellow');
    await waitForUpdate(el);
    expect(base().classList.contains('yellow')).toBe(true);

    el.setAttribute('variant', 'blue');
    await waitForUpdate(el);
    expect(base().classList.contains('blue')).toBe(true);
  });
});
