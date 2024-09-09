'use client';

import { MediaGrid } from '../ui';

import { useInfiniteLoading } from '@/hooks/useInfiniteLoading';

import type { InfiniteLoadingArgs } from '@/hooks/useInfiniteLoading';
import type { Movie, PersonSearchResult, TVShow } from '@/tmdb';
import type { LayoutItem } from '../../types';

export type SearchInfiniteLoadingProps<T extends TVShow | Movie | PersonSearchResult> =
  InfiniteLoadingArgs<T> & {
    layout: LayoutItem;
  };

export function SearchInfiniteLoading<T extends TVShow | Movie | PersonSearchResult>({
  layout,
  initialResults,
  queryPage,
}: SearchInfiniteLoadingProps<T>): JSX.Element {
  const { data, state, viewRef } = useInfiniteLoading<T>({
    initialResults,
    queryPage,
  });

  if (!data.length) {
    return <p>No results found.</p>;
  }

  return <MediaGrid data={data} state={state} layout={layout} viewRef={viewRef} />;
}
