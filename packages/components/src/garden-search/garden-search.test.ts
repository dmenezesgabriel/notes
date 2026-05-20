import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { GardenSearch } from './garden-search';

function waitForUpdate(el: Element): Promise<void> {
  return (el as unknown as { updateComplete: Promise<void> }).updateComplete;
}

describe('garden-search', () => {
  let el: HTMLElement;

  beforeEach(() => {
    el = document.createElement('garden-search');
    document.body.appendChild(el);
  });

  afterEach(() => {
    document.body.removeChild(el);
  });

  it('renders a shadow root', async () => {
    await waitForUpdate(el);
    expect(el.shadowRoot).not.toBeNull();
  });

  it('renders an input element', async () => {
    await waitForUpdate(el);
    expect(el.shadowRoot!.querySelector('input')).not.toBeNull();
  });

  it('reflects the placeholder attribute to the input', async () => {
    el.setAttribute('placeholder', 'Search notes…');
    await waitForUpdate(el);
    const input = el.shadowRoot!.querySelector('input')!;
    expect(input.placeholder).toBe('Search notes…');
  });

  it('has a default placeholder', async () => {
    await waitForUpdate(el);
    const input = el.shadowRoot!.querySelector('input')!;
    expect(input.placeholder.length).toBeGreaterThan(0);
  });

  it('shows the keyboard shortcut badge', async () => {
    el.setAttribute('kbd', '⌘K');
    await waitForUpdate(el);
    const kbd = el.shadowRoot!.querySelector('kbd');
    expect(kbd).not.toBeNull();
    expect(kbd!.textContent).toBe('⌘K');
  });

  it('has role="search" on the wrapper', async () => {
    await waitForUpdate(el);
    const wrapper = el.shadowRoot!.querySelector('[role="search"]');
    expect(wrapper).not.toBeNull();
  });

  it('emits a garden-search event on input', async () => {
    await waitForUpdate(el);
    const input = el.shadowRoot!.querySelector('input')!;
    const handler = vi.fn();
    el.addEventListener('garden-search', handler);
    input.value = 'zettelkasten';
    input.dispatchEvent(new Event('input'));
    expect(handler).toHaveBeenCalledOnce();
  });

  it('uses the label property as the accessible name when set', async () => {
    el.setAttribute('label', 'Search the garden');
    await waitForUpdate(el);
    const input = el.shadowRoot!.querySelector('input')!;
    expect(input.getAttribute('aria-label')).toBe('Search the garden');
  });

  it('falls back to placeholder for accessible name when label is not set', async () => {
    el.setAttribute('placeholder', 'Search notes…');
    await waitForUpdate(el);
    const input = el.shadowRoot!.querySelector('input')!;
    expect(input.getAttribute('aria-label')).toBe('Search notes…');
  });

  it('renders a visible outline focus indicator in CSS', async () => {
    await waitForUpdate(el);
    const styles = GardenSearch.styles;
    const styleText = Array.isArray(styles)
      ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
      : String(styles);
    expect(styleText).toMatch(/focus-within[\s\S]*?outline/);
  });

  it('disables the focus transform under prefers-reduced-motion', async () => {
    await waitForUpdate(el);
    const styles = GardenSearch.styles;
    const styleText = Array.isArray(styles)
      ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
      : String(styles);
    expect(styleText).toContain('prefers-reduced-motion');
    expect(styleText).toMatch(/prefers-reduced-motion[\s\S]*?transition:\s*none/);
  });
});
