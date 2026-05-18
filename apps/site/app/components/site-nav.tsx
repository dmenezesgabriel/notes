'use client';

import type { NavLink } from '@notes/components';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef } from 'react';

import {
  bindCustomElementEvent,
  type GardenNavElement,
  type GardenThemeChangeDetail,
  invokeCustomElementMethod,
  setCustomElementProperty,
} from '../lib/react-lit-adapter';
import { publicPath } from '../lib/site-path';
import { applyDocumentTheme, readDocumentTheme, writeStoredTheme } from '../lib/theme-preference';

const NAV_LINKS: NavLink[] = [
  { label: 'notes', href: publicPath('/') },
  { label: 'books', href: publicPath('/books') },
  { label: 'about', href: publicPath('/about') },
];

function getActiveLinks(visiblePathname: string): NavLink[] {
  return NAV_LINKS.map((link) => ({
    ...link,
    active:
      link.href === publicPath('/')
        ? visiblePathname === publicPath('/') || visiblePathname === '/'
        : visiblePathname.startsWith(link.href),
  }));
}

/**
 * SiteNav — client component wrapper for `<garden-nav>`.
 *
 * - Applies the centralized React-Lit adapter pattern for complex props and
 *   custom events.
 * - Keeps the document theme and persisted theme preference in sync with the
 *   navigation toggle.
 */
export function SiteNav() {
  const pathname = usePathname();
  const ref = useRef<GardenNavElement | null>(null);

  useEffect(() => {
    const navElement = ref.current;
    if (!navElement) return;

    const currentTheme = readDocumentTheme(document.documentElement);
    if (currentTheme) {
      invokeCustomElementMethod(navElement, 'setTheme', currentTheme);
    }

    return bindCustomElementEvent<GardenThemeChangeDetail>(
      navElement,
      'garden-theme-change',
      ({ theme }) => {
        applyDocumentTheme(document.documentElement, theme);
        writeStoredTheme(localStorage, theme);
      },
    );
  }, []);

  useEffect(() => {
    setCustomElementProperty(ref.current, 'homeHref', publicPath('/'));
    setCustomElementProperty(ref.current, 'links', getActiveLinks(publicPath(pathname)));
  }, [pathname]);

  return (
    <garden-nav ref={ref} brand="garden.dev" homeHref={publicPath('/')} data-testid="site-nav" />
  );
}
