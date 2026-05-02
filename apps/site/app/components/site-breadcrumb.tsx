'use client';

import { useEffect, useRef } from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface SiteBreadcrumbProps {
  items: BreadcrumbItem[];
}

/**
 * SiteBreadcrumb — wraps `<garden-breadcrumb>` and sets the `items` array
 * as a JS property (cannot be serialised as an HTML attribute).
 */
export function SiteBreadcrumb({ items }: SiteBreadcrumbProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (ref.current as any).items = items;
    }
  }, [items]);

  return <garden-breadcrumb ref={ref} data-testid="site-breadcrumb" />;
}
