'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

/**
 * SiteSearch — wraps `<garden-search>` and wires the `garden-search` event
 * to Next.js router navigation.
 */
export function SiteSearch() {
  const router = useRouter();

  const handleSearch = useCallback(
    (e: Event) => {
      const query = (e as CustomEvent<{ query: string }>).detail.query.trim();
      if (query) {
        router.push(`/?q=${encodeURIComponent(query)}`);
      }
    },
    [router],
  );

  return (
    <garden-search
      placeholder="Search notes…"
      kbd="⌘K"
      onGarden-search={handleSearch as EventListener}
      data-testid="site-search"
    />
  );
}
