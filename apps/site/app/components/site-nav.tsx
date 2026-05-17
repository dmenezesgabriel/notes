'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

import { publicPath } from '../lib/site-path';

const NAV_LINKS = [
  { label: 'notes', href: publicPath('/') },
  { label: 'books', href: publicPath('/books') },
  { label: 'about', href: publicPath('/about') },
] as const;

/**
 * SiteNav — client component wrapper for `<garden-nav>`.
 *
 * - Sets the `links` JS property after mount (active link based on pathname).
 * - Listens for `garden-theme-change` events and applies `data-theme` to
 *   `<html>` + persists the choice in localStorage.
 */
export function SiteNav() {
  const pathname = usePathname();
  const ref = useRef<HTMLElement>(null);

  // ── Theme management ──────────────────────────────────────────────────────
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Sync initial theme to the component's toggle UI
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark' || currentTheme === 'light') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (el as any).setTheme?.(currentTheme);
    }

    // Keep the brand link aligned with the route the nav should send users to.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (el as any).homeHref = publicPath('/');

    const handleThemeChange = (e: Event) => {
      const theme = (e as CustomEvent<{ theme: 'light' | 'dark' }>).detail.theme;
      document.documentElement.setAttribute('data-theme', theme);
      try {
        localStorage.setItem('theme', theme);
      } catch {
        // ignore – private browsing with full storage
      }
    };

    el.addEventListener('garden-theme-change', handleThemeChange);
    return () => el.removeEventListener('garden-theme-change', handleThemeChange);
  }, []);

  // ── Active-link hydration ─────────────────────────────────────────────────
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const visiblePathname = window.location.pathname;
    const links = NAV_LINKS.map((l) => ({
      ...l,
      active:
        l.href === publicPath('/')
          ? visiblePathname === publicPath('/') || visiblePathname === '/'
          : visiblePathname.startsWith(l.href),
    }));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (el as any).links = links;
  }, [pathname]);

  return <garden-nav ref={ref} brand="garden.dev" data-testid="site-nav" />;
}
