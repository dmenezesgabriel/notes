import type {
  BreadcrumbItem as GardenBreadcrumbItem,
  NavLink as GardenNavLink,
  TocEntry as GardenTocEntry,
} from '@notes/components';
import type { TocEntry } from '@notes/content';

import type { BreadcrumbItem } from './note-processor';
import type { ThemePreference } from './theme-preference';

export interface GardenItemsElement<TItems> extends HTMLElement {
  items: TItems[];
}

export interface GardenNavElement extends HTMLElement {
  homeHref: string;
  links: GardenNavLink[];
  setTheme(theme: ThemePreference): void;
}

export interface GardenSearchElement extends HTMLElement {
  value: string;
}

export type GardenBreadcrumbElement = GardenItemsElement<GardenBreadcrumbItem>;

export type GardenTocElement = GardenItemsElement<GardenTocEntry>;

export interface GardenThemeChangeDetail {
  theme: ThemePreference;
}

export interface GardenSearchDetail {
  query: string;
}

function withUpgradedCustomElement<TElement extends HTMLElement>(
  element: TElement | null,
  callback: (resolvedElement: TElement) => void,
): void {
  if (!element) return;

  const tagName = element.localName;
  const isCustomElement = tagName.includes('-') && typeof customElements !== 'undefined';
  const runCallback = () => {
    if (isCustomElement) {
      customElements.upgrade(element);
    }
    callback(element);
  };

  if (isCustomElement && customElements.get(tagName) == null) {
    void customElements.whenDefined(tagName).then(() => {
      if (element.isConnected) {
        runCallback();
      }
    });
    return;
  }

  runCallback();
}

export function setCustomElementProperty<TElement extends HTMLElement, TKey extends keyof TElement>(
  element: TElement | null,
  key: TKey,
  value: TElement[TKey],
): void {
  withUpgradedCustomElement(element, (resolvedElement) => {
    resolvedElement[key] = value;
  });
}

export function invokeCustomElementMethod<TElement extends HTMLElement, TArgs extends unknown[]>(
  element: TElement | null,
  methodName: keyof TElement & string,
  ...args: TArgs
): void {
  withUpgradedCustomElement(element, (resolvedElement) => {
    const method = resolvedElement[methodName];
    if (typeof method === 'function') {
      (method as unknown as (this: TElement, ...methodArgs: TArgs) => void).apply(
        resolvedElement,
        args,
      );
    }
  });
}

export function setCustomElementItems<TItems>(
  element: GardenItemsElement<TItems> | null,
  items: TItems[],
): void {
  setCustomElementProperty(element, 'items', items);
}

export function bindCustomElementEvent<TDetail>(
  element: HTMLElement | null,
  eventName: string,
  handler: (detail: TDetail, event: CustomEvent<TDetail>) => void,
): () => void {
  if (!element) {
    return () => undefined;
  }

  const listener: EventListener = (event) => {
    const customEvent = event as CustomEvent<TDetail>;
    handler(customEvent.detail, customEvent);
  };

  element.addEventListener(eventName, listener);

  return () => {
    element.removeEventListener(eventName, listener);
  };
}

export function mapBreadcrumbItemsToGarden(items: BreadcrumbItem[]): GardenBreadcrumbItem[] {
  return items.map((item) => ({
    label: item.label,
    ...(item.href ? { href: item.href } : {}),
  }));
}

export function mapTocItemsToGarden(items: TocEntry[]): GardenTocEntry[] {
  return items.map((item) => ({
    id: item.id,
    label: item.label,
    ...(item.depth != null ? { depth: item.depth } : {}),
    ...(item.active != null ? { active: item.active } : {}),
  }));
}
