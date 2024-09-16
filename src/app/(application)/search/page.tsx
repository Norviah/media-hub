import {
  MediaGrid,
  SearchInfiniteLoading,
  SearchParamsSchema,
  SearchState,
} from '@/systems/search';
import { Suspense } from 'react';

import { defaultLayout, getSearchState, layouts } from '@/systems/search';
import { endpoints, genres } from '@/tmdb';

import type { discover, search } from '@/tmdb/endpoints';
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

  async function querySearchEndpoint(page: number) {
    'use server';

    const options = { query: params.q as string, page };

    if (params.year && params.type === 'movie') {
      (options as search.SearchMovieOptions).primary_release_year = params.year;
    }

    if (params.year && params.type === 'tv') {
      (options as search.SearchTVShowOptions).year = params.year;
    }

    return await endpoints.search[params.type ?? 'multi'](options);
  }

  async function queryDiscoverEndpoint(page: number) {
    'use server';

    const options: discover.DiscoverMovieQueryOptions | discover.DiscoverTVShowQueries = {
      page,
    };

    if (params.year && params.type === 'movie') {
      (options as discover.DiscoverMovieQueryOptions).primary_release_year = params.year;
    }

    if (params.year && params.type === 'tv') {
      (options as discover.DiscoverTVShowQueries).first_air_date_year = params.year;
    }

    if (pickedGenres.length) {
      // @ts-expect-error The correct ids are being passed.
      options.with_genres = { and: pickedGenresIds };
    }

    if (params.type === 'movie') {
      return await endpoints.discover.movies(options as discover.DiscoverMovieQueryOptions);
    }

    return await endpoints.discover.tv(options as discover.DiscoverTVShowQueries);
  }

  const endpoint = state === SearchState.DISCOVER ? queryDiscoverEndpoint : querySearchEndpoint;

  return (
    <Suspense fallback={<MediaGrid layout={layout} skeleton />} key={JSON.stringify(params)}>
      {state === SearchState.PERSON_SEARCHING_NO_QUERY ? (
        <div>Search for someone.</div>
      ) : (
        <SearchInfiniteLoading layout={layout} queryPage={endpoint} initialQuery={endpoint(1)} />
      )}
    </Suspense>
  );
}
