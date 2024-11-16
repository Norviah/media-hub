import {
  ErrorHandler,
  Grid,
  SearchControls,
  SearchInfiniteLoading,
  SearchMenu,
  SearchState,
  TrendingPage,
} from '@/sections/search';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import { Suspense } from 'react';

import { getState, queryDiscoverEndpoint, querySearchEndpoint } from '@/sections/search';

import type { Collection, Movie, PersonSearchResult, SearchResult, TVShow } from '@/tmdb';
import type { PageProps } from '@/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search',
};

export default async function SearchPage({ searchParams }: PageProps): Promise<JSX.Element> {
  const context = getState(searchParams);

  async function action(page: number) {
    'use server';

    const { pickedGenresIds, params, sortOption } = context;

    let data: SearchResult<TVShow | Movie | PersonSearchResult | Collection>;

    if (context.state === SearchState.DISCOVER) {
      data = await queryDiscoverEndpoint({ page, pickedGenresIds, params, sortOption });
    } else {
      data = await querySearchEndpoint({ page, pickedGenresIds, params });
    }

    return {
      ...data,
      results: data.results.filter((result) => result.media_type !== 'collection'),
    };
  }

  return (
    <div className='space-y-7'>
      <SearchMenu {...context} />
      {context.state !== SearchState.TRENDING && <SearchControls {...context} />}

      {context.state === SearchState.TRENDING ? (
        <TrendingPage />
      ) : (
        <Suspense
          fallback={<Grid layout={context.layout} skeleton />}
          key={JSON.stringify(context.params)}
        >
          <ErrorBoundary errorComponent={ErrorHandler}>
            {context.state === SearchState.PERSON_SEARCHING_NO_QUERY ? (
              <div>Search for someone.</div>
            ) : (
              <SearchInfiniteLoading
                layout={context.layout}
                queryPage={action}
                initialQuery={action(1)}
              />
            )}
          </ErrorBoundary>
        </Suspense>
      )}
    </div>
  );
}
