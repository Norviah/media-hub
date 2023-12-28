'use server';

import { env } from '@/utils/env';
import { TMDB } from 'tmdb-ts';

import type { Movie, MovieDetails, Search, TV, TvShowDetails } from 'tmdb-ts';
import type { MovieSearchOptions, TvSearchOptions } from 'tmdb-ts/dist/endpoints';

const tmdb: TMDB = new TMDB(env.TMDB_API_KEY);

export type MovieSearchResult = Movie & { type: 'movie' };

export async function searchMovies({ page = 1, ...options }: MovieSearchOptions): Promise<Search<MovieSearchResult> | null> {
  try {
    const response = await tmdb.search.movies({ page, ...options });

    return {
      ...response,
      results: response.results.map((movie) => ({ ...movie, type: 'movie' })),
    };
  } catch {
    return null;
  }
}

export type TvSearchResult = TV & { type: 'tv' };

export async function searchTvShows({ page = 1, ...options }: TvSearchOptions): Promise<Search<TvSearchResult> | null> {
  try {
    const response = await tmdb.search.tvShows({ page, ...options });

    return {
      ...response,
      results: response.results.map((tvShow) => ({ ...tvShow, type: 'tv' })),
    };
  } catch {
    return null;
  }
}

export async function getMovie(id: number): Promise<(MovieDetails & { type: 'movie' }) | null> {
  try {
    return { ...(await tmdb.movies.details(id)), type: 'movie' };
  } catch {
    return null;
  }
}

export async function getTvShow(id: number): Promise<(TvShowDetails & { type: 'tv' }) | null> {
  try {
    return { ...(await tmdb.tvShows.details(id)), type: 'tv' };
  } catch {
    return null;
  }
}
