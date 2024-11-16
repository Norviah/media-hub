'use client';

import { Grid } from './ui';

import { useInfiniteLoading } from '@/hooks/useInfiniteLoading';
import { use } from 'react';

import type { InfiniteLoadingArgs } from '@/hooks/useInfiniteLoading';
import type { Movie, PersonSearchResult, SearchResult, TVShow } from '@/tmdb';
import type { LayoutItem } from '../lib';

export type SearchInfiniteLoadingProps<T extends TVShow | Movie | PersonSearchResult> = Omit<
  InfiniteLoadingArgs<T>,
  'initialResults'
> & {
  initialQuery: Promise<SearchResult<T>> | false;
  layout: LayoutItem;
};

export function SearchInfiniteLoading<T extends TVShow | Movie | PersonSearchResult>({
  queryPage,
  initialQuery,
  layout,
}: SearchInfiniteLoadingProps<T>): JSX.Element | null {
  if (!initialQuery) {
    return null;
  }

  const initialResults = use(initialQuery);

  const { data, state, viewRef } = useInfiniteLoading<T>({
    initialResults,
    queryPage,
  });

  if (!data.length) {
    return <p>No results found.</p>;
  }

  return <Grid data={data} state={state} layout={layout} viewRef={viewRef} />;
}
