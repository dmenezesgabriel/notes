import './garden-button';

import { afterEach, beforeEach, describe, expect, it } from 'vitest';

function waitForUpdate(el: Element): Promise<void> {
  return (el as unknown as { updateComplete: Promise<void> }).updateComplete;
}

describe('garden-button', () => {
  let el: HTMLElement;

  beforeEach(() => {
    el = document.createElement('garden-button');
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
    el.textContent = 'Publish note';
    await waitForUpdate(el);
    expect(el.textContent).toBe('Publish note');
  });

  it('renders a button element inside', async () => {
    await waitForUpdate(el);
    const btn = el.shadowRoot!.querySelector('button');
    expect(btn).not.toBeNull();
  });

  it('defaults to the default variant', async () => {
    await waitForUpdate(el);
    const btn = el.shadowRoot!.querySelector('button')!;
    expect(btn.className).not.toContain('primary');
    expect(btn.className).not.toContain('ghost');
  });

  it('applies primary variant', async () => {
    el.setAttribute('variant', 'primary');
    await waitForUpdate(el);
    const btn = el.shadowRoot!.querySelector('button')!;
    expect(btn.classList.contains('primary')).toBe(true);
  });

  it('applies ghost variant', async () => {
    el.setAttribute('variant', 'ghost');
    await waitForUpdate(el);
    const btn = el.shadowRoot!.querySelector('button')!;
    expect(btn.classList.contains('ghost')).toBe(true);
  });

  it('is disabled when the disabled attribute is set', async () => {
    el.setAttribute('disabled', '');
    await waitForUpdate(el);
    const btn = el.shadowRoot!.querySelector('button')!;
    expect(btn.disabled).toBe(true);
  });

  it('has type="button" by default', async () => {
    await waitForUpdate(el);
    const btn = el.shadowRoot!.querySelector('button')!;
    expect(btn.type).toBe('button');
  });
});
