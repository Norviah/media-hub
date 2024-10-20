import {
  ErrorHandler,
  Grid,
  SearchControls,
  SearchInfiniteLoading,
  SearchMenu,
  SearchState,
  TrendingPage,
} from '@/systems/search';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import { Suspense } from 'react';

import { getState, queryDiscoverEndpoint, querySearchEndpoint } from '@/systems/search';

import type { PageProps } from '@/types';

export default async function SearchPage({ searchParams }: PageProps): Promise<JSX.Element> {
  const context = getState(searchParams);

  async function action(page: number) {
    'use server';

    const { pickedGenresIds, params } = context;

    if (context.state === SearchState.DISCOVER) {
      return await queryDiscoverEndpoint({ page, pickedGenresIds, params });
    }

    return await querySearchEndpoint({ page, pickedGenresIds, params });
  }

  return (
    <div className='space-y-7'>
      <SearchMenu {...context} />

      {context.state === SearchState.TRENDING ? (
        <TrendingPage />
      ) : (
        <Suspense
          fallback={<Grid layout={context.layout} skeleton />}
          key={JSON.stringify(context.params)}
        >
          <ErrorBoundary errorComponent={ErrorHandler}>
            <SearchControls {...context} />

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
