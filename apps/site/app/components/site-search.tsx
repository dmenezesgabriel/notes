'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useCallback, useEffect, useRef } from 'react';

/**
 * Inner component that reads `useSearchParams` (must be inside a Suspense
 * boundary when used in a Server Component layout).
 */
function SiteSearchInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const ref = useRef<HTMLElement>(null);
  const currentQuery = searchParams.get('q') ?? '';

  // Seed the web-component's value from the URL on mount / navigation.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (el as any).value = currentQuery;
  }, [currentQuery]);

  // Wire the custom event — React JSX can't handle hyphenated event names on
  // custom elements, so we use addEventListener instead.
  const handleSearch = useCallback(
    (e: Event) => {
      const query = (e as CustomEvent<{ query: string }>).detail.query.trim();
      if (query) {
        router.push(`/?q=${encodeURIComponent(query)}`);
      } else {
        router.push('/');
      }
    },
    [router],
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener('garden-search', handleSearch);
    return () => el.removeEventListener('garden-search', handleSearch);
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
