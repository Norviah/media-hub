'use client';

import { MediaGrid } from './ui';

import { useInfiniteLoading } from '@/hooks/useInfiniteLoading';
import { use } from 'react';

import type { InfiniteLoadingArgs } from '@/hooks/useInfiniteLoading';
import type { Movie, PersonSearchResult, SearchResult, TVShow } from '@/tmdb';
import type { LayoutItem } from '../lib';

export type SearchInfiniteLoadingProps<T extends TVShow | Movie | PersonSearchResult> = Omit<
  InfiniteLoadingArgs<T>,
  'initialResults'
> & {
  layout: LayoutItem;
  initialQuery: Promise<SearchResult<T>>;
};

export function SearchInfiniteLoading<T extends TVShow | Movie | PersonSearchResult>({
  layout,
  queryPage,
  initialQuery,
}: SearchInfiniteLoadingProps<T>): JSX.Element {
  const initialResults = use(initialQuery);

  const { data, state, viewRef } = useInfiniteLoading<T>({
    initialResults,
    queryPage,
  });

  if (!data.length) {
    return <p>No results found.</p>;
  }

  return <MediaGrid data={data} state={state} layout={layout} viewRef={viewRef} />;
}
