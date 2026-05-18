'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense, useCallback, useEffect, useRef } from 'react';

import {
  bindCustomElementEvent,
  type GardenSearchDetail,
  type GardenSearchElement,
  setCustomElementProperty,
} from '../lib/react-lit-adapter';
import { linkPath } from '../lib/site-path';

/**
 * Inner component that reads `useSearchParams` (must be inside a Suspense
 * boundary when used in a Server Component layout).
 */
function SiteSearchInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const ref = useRef<GardenSearchElement | null>(null);
  const currentQuery = searchParams.get('q') ?? '';

  // Seed the web-component's value from the URL on mount / navigation.
  useEffect(() => {
    setCustomElementProperty(ref.current, 'value', currentQuery);
  }, [currentQuery]);

  // Wire the custom event — React JSX can't handle hyphenated event names on
  // custom elements, so we use addEventListener instead.
  const handleSearch = useCallback(
    ({ query }: GardenSearchDetail) => {
      const nextQuery = query.trim();
      if (nextQuery) {
        router.push(linkPath(`/?q=${encodeURIComponent(nextQuery)}`));
      } else {
        router.push(linkPath('/'));
      }
    },
    [router],
  );

  useEffect(() => {
    return bindCustomElementEvent<GardenSearchDetail>(ref.current, 'garden-search', handleSearch);
  }, [handleSearch]);

  return <garden-search ref={ref} placeholder="Search notes…" kbd="⌘K" data-testid="site-search" />;
}

/**
 * SiteSearch — wraps `<garden-search>` in a Suspense boundary (required by
 * Next.js App Router when calling `useSearchParams()` outside of a client
 * layout that already provides it).
 */
export function SiteSearch() {
  return (
    <Suspense fallback={null}>
      <SiteSearchInner />
    </Suspense>
  );
}
