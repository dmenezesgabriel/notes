'use client';

import type { TocEntry } from '@notes/content';
import React, { useEffect, useRef } from 'react';

import {
  type GardenTocElement,
  mapTocItemsToGarden,
  setCustomElementItems,
} from '../lib/react-lit-adapter';

interface SiteTocProps {
  items: TocEntry[];
  heading?: string;
  slot?: string;
}

/**
 * SiteToc — app-level React-Lit adapter for `<garden-toc>`.
 * Maps note TOC data into the custom-element contract and assigns the
 * `items` array as a JS property.
 */
export function SiteToc({ items, heading = 'On this page', slot }: SiteTocProps) {
  const ref = useRef<GardenTocElement | null>(null);

  useEffect(() => {
    setCustomElementItems(ref.current, mapTocItemsToGarden(items));
  }, [items]);

  return <garden-toc ref={ref} slot={slot} heading={heading} data-testid="site-toc" />;
}
