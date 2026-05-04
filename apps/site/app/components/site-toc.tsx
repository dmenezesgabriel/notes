'use client';

import { useEffect, useRef } from 'react';

interface TocEntry {
  id: string;
  label: string;
  depth?: number;
  active?: boolean;
}

interface SiteTocProps {
  items: TocEntry[];
  heading?: string;
  slot?: string;
}

/**
 * SiteToc — wraps `<garden-toc>` and sets the `items` array via JS property.
 */
export function SiteToc({ items, heading = 'On this page' }: SiteTocProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (ref.current as any).items = items;
    }
  }, [items]);

  return <garden-toc ref={ref} heading={heading} data-testid="site-toc" />;
}
