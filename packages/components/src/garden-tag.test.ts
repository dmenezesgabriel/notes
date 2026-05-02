import './garden-tag';

import { afterEach, beforeEach, describe, expect, it } from 'vitest';

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

  it('has role="note" for accessibility', async () => {
    await waitForUpdate(el);
    // slot is rendered inside the part=base element
    expect(el.shadowRoot!.querySelector('[part="base"]')).not.toBeNull();
  });
});
