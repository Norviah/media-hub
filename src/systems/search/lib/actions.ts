'use server';

import { endpoints } from '@/tmdb';

import type { discover, search } from '@/tmdb/endpoints';
import type { SearchParamsSchema } from './schemas';

export async function querySearchEndpoint(params: SearchParamsSchema, page: number) {
  const options = { query: params.q as string, page };

  if (params.year && params.type === 'movie') {
    (options as search.SearchMovieOptions).primary_release_year = params.year;
  }

  if (params.year && params.type === 'tv') {
    (options as search.SearchTVShowOptions).year = params.year;
  }

  return await endpoints.search[params.type ?? 'multi'](options);
}

export async function queryDiscoverEndpoint(
  params: SearchParamsSchema,
  pickedGenresIds: number[],
  page: number,
) {
  const options: discover.DiscoverMovieQueryOptions | discover.DiscoverTVShowQueries = {
    page,
  };

  if (params.year && params.type === 'movie') {
    (options as discover.DiscoverMovieQueryOptions).primary_release_year = params.year;
  }

  if (params.year && params.type === 'tv') {
    (options as discover.DiscoverTVShowQueries).first_air_date_year = params.year;
  }

  if (pickedGenresIds.length) {
    // @ts-expect-error The correct ids are being passed.
    options.with_genres = { and: pickedGenresIds };
  }

  if (params.type === 'movie') {
    return await endpoints.discover.movies(options as discover.DiscoverMovieQueryOptions);
  }

  return await endpoints.discover.tv(options as discover.DiscoverTVShowQueries);
}
