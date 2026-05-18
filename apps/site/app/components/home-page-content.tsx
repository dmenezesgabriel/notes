'use client';

import type { Note } from '@notes/content';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

import { HomePageSlice } from './home-page-slice';
import { SiteSearch } from './site-search';

interface HomePageContentProps {
  notes: Note[];
}

function HomePageContentInner({ notes }: HomePageContentProps) {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') ?? '';

  return <HomePageSlice notes={notes} query={query} searchSlot={<SiteSearch />} />;
}

export function HomePageContent({ notes }: HomePageContentProps) {
  return (
    <Suspense fallback={null}>
      <HomePageContentInner notes={notes} />
    </Suspense>
  );
}
