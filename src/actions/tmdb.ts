'use server';

import { TMDB } from 'tmdb-ts';

import { parse } from '@/systems/search/util/parse';
import { env } from '@/utils/env';

import type { BasicMediaData } from '@/systems/search/util/parse';
import type { Movie, MovieDetails, Search, TV, TvShowDetails } from 'tmdb-ts';
import type { MovieSearchOptions, TvSearchOptions } from 'tmdb-ts/dist/endpoints';

const tmdb: TMDB = new TMDB(env.TMDB_API_KEY);

export async function searchTv(options: TvSearchOptions): Promise<Search<BasicMediaData> | null> {
  try {
    const response: Search<TV> = await tmdb.search.tvShows(options);
    const parsed = response.results.map((result) => {
      return parse({ ...result, type: 'tv' });
    });

    return {
      ...response,
      results: parsed,
    };
  } catch {
    return null;
  }
}

export async function searchMovie(options: MovieSearchOptions): Promise<Search<BasicMediaData> | null> {
  try {
    const response: Search<Movie> = await tmdb.search.movies(options);
    const parsed = response.results.map((result) => {
      return parse({ ...result, type: 'movie' });
    });

    return {
      ...response,
      results: parsed,
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

export type Genre = { id: number; name: string }[];
