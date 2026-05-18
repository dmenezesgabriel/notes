// @vitest-environment happy-dom

import type { TocEntry } from '@notes/content';
import { describe, expect, it, vi } from 'vitest';

import type { BreadcrumbItem } from './note-processor';
import {
  bindCustomElementEvent,
  invokeCustomElementMethod,
  mapBreadcrumbItemsToGarden,
  mapTocItemsToGarden,
  setCustomElementProperty,
} from './react-lit-adapter';

describe('react-lit adapter helpers', () => {
  it('assigns complex custom-element properties without route-local casts', () => {
    const element = document.createElement('div') as HTMLDivElement & { value?: string };

    setCustomElementProperty(element, 'value', 'software design');

    expect(element.value).toBe('software design');
  });

  it('replays property assignment after a supported custom element definition resolves', async () => {
    const tagName = `garden-test-${crypto.randomUUID()}`;
    const element = document.createElement(tagName) as HTMLElement & { value?: string };
    document.body.appendChild(element);
    Object.defineProperty(element, 'isConnected', {
      value: true,
      configurable: true,
    });

    const originalGet = customElements.get.bind(customElements);
    const getSpy = vi
      .spyOn(customElements, 'get')
      .mockImplementation((name) => (name === tagName ? undefined : originalGet(name)));
    const whenDefinedSpy = vi
      .spyOn(customElements, 'whenDefined')
      .mockImplementation(async () => class extends HTMLElement {});

    setCustomElementProperty(element, 'value', 'upgraded value');
    await Promise.resolve();
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(whenDefinedSpy).toHaveBeenCalledWith(tagName);
    expect(element.value).toBe('upgraded value');

    getSpy.mockRestore();
    whenDefinedSpy.mockRestore();
    element.remove();
  });

  it('invokes imperative custom-element methods through the centralized adapter boundary', () => {
    const element = document.createElement('div') as HTMLDivElement & {
      setTheme(theme: string): void;
    };
    const setTheme = vi.fn();
    element.setTheme = setTheme;

    invokeCustomElementMethod(element, 'setTheme', 'dark');

    expect(setTheme).toHaveBeenCalledWith('dark');
  });

  it('wires custom-element events through the centralized adapter boundary', () => {
    const element = document.createElement('div');
    const handler = vi.fn();
    const cleanup = bindCustomElementEvent<{ theme: 'light' | 'dark' }>(
      element,
      'garden-theme-change',
      handler,
    );

    element.dispatchEvent(
      new CustomEvent('garden-theme-change', {
        detail: { theme: 'dark' },
      }),
    );

    expect(handler).toHaveBeenCalledWith(
      { theme: 'dark' },
      expect.objectContaining({ detail: { theme: 'dark' } }),
    );

    cleanup();
    handler.mockClear();

    element.dispatchEvent(
      new CustomEvent('garden-theme-change', {
        detail: { theme: 'light' },
      }),
    );

    expect(handler).not.toHaveBeenCalled();
  });

  it('maps breadcrumb data into the garden-breadcrumb contract', () => {
    const items: BreadcrumbItem[] = [
      { label: 'home', href: '/notes' },
      { label: 'Data Engineering', href: '/notes/data-engineer' },
      { label: 'Data Modeling Cardinality' },
    ];

    expect(mapBreadcrumbItemsToGarden(items)).toEqual([
      { label: 'home', href: '/notes' },
      { label: 'Data Engineering', href: '/notes/data-engineer' },
      { label: 'Data Modeling Cardinality' },
    ]);
  });

  it('maps toc data into the garden-toc contract', () => {
    const items: TocEntry[] = [
      { id: 'intro', label: 'Introduction', depth: 1 },
      { id: 'details', label: 'Details', depth: 2, active: true },
    ];

    expect(mapTocItemsToGarden(items)).toEqual([
      { id: 'intro', label: 'Introduction', depth: 1 },
      { id: 'details', label: 'Details', depth: 2, active: true },
    ]);
  });
});
