'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

const NAV_LINKS = [
  { label: 'notes', href: '/' },
  { label: 'books', href: '/books' },
  { label: 'about', href: '/about' },
] as const;

/**
 * SiteNav — client component wrapper for `<garden-nav>`.
 * Sets the `links` JS property (array) via ref after mount,
 * updating the active link based on the current pathname.
 */
export function SiteNav() {
  const pathname = usePathname();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const links = NAV_LINKS.map((l) => ({
      ...l,
      active:
        l.href === '/'
          ? pathname === '/' ||
            (!NAV_LINKS.slice(1).some((x) => pathname.startsWith(x.href)) && pathname !== '/')
          : pathname.startsWith(l.href),
    }));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (el as any).links = links;
  }, [pathname]);

  // `brand` is a plain string attribute — can be set server-side.
  // `links` is an array — set via JS property in useEffect above.
  return <garden-nav ref={ref} brand="garden.dev" data-testid="site-nav" />;
}
