'use client';

import React, { useEffect, useRef } from 'react';

import type { BreadcrumbItem } from '../lib/note-processor';
import {
  type GardenBreadcrumbElement,
  mapBreadcrumbItemsToGarden,
  setCustomElementItems,
} from '../lib/react-lit-adapter';

interface SiteBreadcrumbProps {
  items: BreadcrumbItem[];
  slot?: string;
}

/**
 * SiteBreadcrumb — app-level React-Lit adapter for `<garden-breadcrumb>`.
 * Maps route breadcrumb data into the custom-element contract and assigns
 * the `items` array as a JS property.
 */
export function SiteBreadcrumb({ items, slot }: SiteBreadcrumbProps) {
  const ref = useRef<GardenBreadcrumbElement | null>(null);

  useEffect(() => {
    setCustomElementItems(ref.current, mapBreadcrumbItemsToGarden(items));
  }, [items]);

  return <garden-breadcrumb ref={ref} slot={slot} data-testid="site-breadcrumb" />;
}
