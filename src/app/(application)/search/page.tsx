import {
  ErrorHandler,
  MediaGrid,
  SearchControls,
  SearchInfiniteLoading,
  SearchMenu,
  SearchParamsSchema,
  SearchState,
} from '@/systems/search';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import { Suspense } from 'react';

import { defaultLayout, getSearchState, layouts } from '@/systems/search';
import { endpoints, genres } from '@/tmdb';

import type { Genre } from '@/tmdb';
import type {
  DiscoverMovieQueryOptions,
  DiscoverTVShowQueries,
  MovieGenre,
  TVShowGenre,
} from '@/tmdb/endpoints/discover';
import type {
  MultiSearchOptions,
  SearchMovieOptions,
  SearchTVShowOptions,
} from '@/tmdb/endpoints/search';
import type { PageProps } from '@/types';

export default async function SearchPage({ searchParams }: PageProps): Promise<JSX.Element> {
  const params = SearchParamsSchema.parse(searchParams);
  const layout = layouts.find((layout) => layout.slug === params.layout) ?? defaultLayout;

  const genresList = params.type && params.type !== 'person' ? genres[params.type] : [];
  const pickedGenres = genresList.filter((genre) => params.genres.includes(genre.name));
  const pickedGenresIds = pickedGenres.map((genre) => genre.id) as (TVShowGenre | MovieGenre)[];

  const state = getSearchState(params);

  async function querySearchEndpoint(page: number) {
    'use server';

    const options: SearchMovieOptions | SearchTVShowOptions | MultiSearchOptions = {
      query: params.q as string,
      page,
    };

    if (params.year && params.type === 'movie') {
      (options as SearchMovieOptions).primary_release_year = params.year;
    }

    if (params.year && params.type === 'tv') {
      (options as SearchTVShowOptions).year = params.year;
    }

    return await endpoints.search[params.type ?? 'multi'](options);
  }

  async function queryDiscoverEndpoint(page: number) {
    'use server';

    const options: DiscoverMovieQueryOptions | DiscoverTVShowQueries = {
      page,
    };

    if (params.year && params.type === 'movie') {
      (options as DiscoverMovieQueryOptions).primary_release_year = params.year;
    }

    if (params.year && params.type === 'tv') {
      (options as DiscoverTVShowQueries).first_air_date_year = params.year;
    }

    if (pickedGenres.length) {
      // @ts-expect-error The correct ids are being passed.
      options.with_genres = { and: pickedGenresIds };
    }

    if (params.type === 'movie') {
      return await endpoints.discover.movies(options as DiscoverMovieQueryOptions);
    }

    return await endpoints.discover.tv(options as DiscoverTVShowQueries);
  }

  if (state === SearchState.TRENDING) {
    return (
      <SearchContainer params={params} genresList={genresList} pickedGenres={pickedGenres}>
        <p>TRENDING</p>
      </SearchContainer>
    );
  }

  const endpoint = state === SearchState.DISCOVER ? queryDiscoverEndpoint : querySearchEndpoint;

  return (
    <SearchContainer params={params} genresList={genresList} pickedGenres={pickedGenres}>
      <Suspense fallback={<MediaGrid layout={layout} skeleton />} key={JSON.stringify(params)}>
        {state === SearchState.PERSON_SEARCHING_NO_QUERY ? (
          <div>Search for someone.</div>
        ) : (
          <SearchInfiniteLoading layout={layout} queryPage={endpoint} initialQuery={endpoint(1)} />
        )}
      </Suspense>
    </SearchContainer>
  );
}

export type SearchContainerProps = {
  params: SearchParamsSchema;
  genresList: Genre[];
  pickedGenres: Genre[];
  children: JSX.Element;
};

function SearchContainer({ children, params, genresList, pickedGenres }: SearchContainerProps) {
  return (
    <div className='space-y-7'>
      <SearchMenu params={params} genresList={genresList} pickedGenres={pickedGenres} />
      <SearchControls params={params} genres={pickedGenres} />

      <ErrorBoundary errorComponent={ErrorHandler}>{children}</ErrorBoundary>
    </div>
  );
}
