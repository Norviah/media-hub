import {
  MediaGrid,
  SearchInfiniteLoading,
  SearchParamsSchema,
  SearchState,
} from '@/systems/search';
import { Suspense } from 'react';

import {
  defaultLayout,
  getSearchState,
  layouts,
  queryDiscoverEndpoint,
  querySearchEndpoint,
} from '@/systems/search';
import { genres } from '@/tmdb';

import type { discover } from '@/tmdb/endpoints';
import type { PageProps } from '@/types';

export default async function SearchPage({ searchParams }: PageProps): Promise<JSX.Element> {
  const params = SearchParamsSchema.parse(searchParams);
  const layout = layouts.find((layout) => layout.slug === params.layout) ?? defaultLayout;

  const genresList = params.type && params.type !== 'person' ? genres[params.type] : [];
  const pickedGenres = genresList.filter((genre) => params.genres.includes(genre.name));
  const pickedGenresIds = pickedGenres.map((genre) => genre.id) as (
    | discover.TVShowGenre
    | discover.MovieGenre
  )[];

  const state = getSearchState(params);

  if (state === SearchState.TRENDING) {
    return <p>TRENDING</p>;
  }

  async function action(page: number) {
    'use server';

    if (state === SearchState.DISCOVER) {
      return await queryDiscoverEndpoint(params, pickedGenresIds, page);
    }

    return await querySearchEndpoint(params, page);
  }

  return (
    <Suspense fallback={<MediaGrid layout={layout} skeleton />} key={JSON.stringify(params)}>
      {state === SearchState.PERSON_SEARCHING_NO_QUERY ? (
        <div>Search for someone.</div>
      ) : (
        <SearchInfiniteLoading layout={layout} queryPage={action} initialQuery={action(1)} />
      )}
    </Suspense>
  );
}
