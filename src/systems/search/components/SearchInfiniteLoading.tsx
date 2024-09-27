'use client';

import { SearchContext } from '../lib/context';
import { MediaGrid } from './ui';

import { useInfiniteLoading } from '@/hooks/useInfiniteLoading';
import { use, useContext } from 'react';

import type { InfiniteLoadingArgs } from '@/hooks/useInfiniteLoading';
import type { Movie, PersonSearchResult, SearchResult, TVShow } from '@/tmdb';

export type SearchInfiniteLoadingProps<T extends TVShow | Movie | PersonSearchResult> = Omit<
  InfiniteLoadingArgs<T>,
  'initialResults'
> & {
  initialQuery: Promise<SearchResult<T>> | false;
};

export function SearchInfiniteLoading<T extends TVShow | Movie | PersonSearchResult>({
  queryPage,
  initialQuery,
}: SearchInfiniteLoadingProps<T>): JSX.Element | null {
  if (!initialQuery) {
    return null;
  }

  const initialResults = use(initialQuery);
  const { layout } = useContext(SearchContext);

  const { data, state, viewRef } = useInfiniteLoading<T>({
    initialResults,
    queryPage,
  });

  if (!data.length) {
    return <p>No results found.</p>;
  }

  return <MediaGrid data={data} state={state} layout={layout} viewRef={viewRef} />;
}
