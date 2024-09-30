import { MediaGrid, SearchInfiniteLoading, SearchState, TrendingPage } from '@/systems/search';
import { Suspense } from 'react';

import { getContext, queryDiscoverEndpoint, querySearchEndpoint } from '@/systems/search';

import type { PageProps } from '@/types';

export default async function SearchPage({ searchParams }: PageProps): Promise<JSX.Element> {
  const { params, pickedGenresIds, ...context } = getContext(searchParams);

  if (context.state === SearchState.TRENDING) {
    return <TrendingPage />;
  }

  async function action(page: number) {
    'use server';

    if (context.state === SearchState.DISCOVER) {
      return await queryDiscoverEndpoint({ page, pickedGenresIds, params });
    }

    return await querySearchEndpoint({ page, pickedGenresIds, params });
  }

  return (
    <Suspense
      fallback={<MediaGrid layout={context.layout} skeleton />}
      key={JSON.stringify(params)}
    >
      {context.state === SearchState.PERSON_SEARCHING_NO_QUERY ? (
        <div>Search for someone.</div>
      ) : (
        <SearchInfiniteLoading queryPage={action} initialQuery={action(1)} />
      )}
    </Suspense>
  );
}
