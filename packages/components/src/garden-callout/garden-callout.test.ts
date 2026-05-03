import './garden-callout';

import { afterEach, beforeEach, describe, expect, it } from 'vitest';

function waitForUpdate(el: Element): Promise<void> {
  return (el as unknown as { updateComplete: Promise<void> }).updateComplete;
}

describe('garden-callout', () => {
  let el: HTMLElement;

  beforeEach(() => {
    el = document.createElement('garden-callout');
    document.body.appendChild(el);
  });

  afterEach(() => {
    document.body.removeChild(el);
  });

  it('renders a shadow root', async () => {
    await waitForUpdate(el);
    expect(el.shadowRoot).not.toBeNull();
  });

  it('renders slotted content', async () => {
    el.textContent = 'Start with a weekly review';
    await waitForUpdate(el);
    expect(el.textContent).toContain('Start with a weekly review');
  });

  it('has role="note" for accessibility by default', async () => {
    await waitForUpdate(el);
    const base = el.shadowRoot!.querySelector('[part="base"]')!;
    expect(base.getAttribute('role')).toBe('note');
  });

  it('defaults to note variant', async () => {
    await waitForUpdate(el);
    const base = el.shadowRoot!.querySelector('[part="base"]')!;
    expect(base.className).not.toContain('tip');
    expect(base.className).not.toContain('warning');
  });

  it('applies tip variant', async () => {
    el.setAttribute('variant', 'tip');
    await waitForUpdate(el);
    const base = el.shadowRoot!.querySelector('[part="base"]')!;
    expect(base.classList.contains('tip')).toBe(true);
  });

  it('applies warning variant', async () => {
    el.setAttribute('variant', 'warning');
    await waitForUpdate(el);
    const base = el.shadowRoot!.querySelector('[part="base"]')!;
    expect(base.classList.contains('warning')).toBe(true);
  });

  it('renders the heading slot when heading attr is provided', async () => {
    el.setAttribute('heading', 'Tip');
    await waitForUpdate(el);
    const heading = el.shadowRoot!.querySelector('[part="heading"]');
    expect(heading).not.toBeNull();
    expect(heading!.textContent).toBe('Tip');
  });
});
