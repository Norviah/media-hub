'use server';

import { env } from '@/utils/env';
import { TMDB } from 'tmdb-ts';

import type { Movie, MovieDetails, Search, TV, TvShowDetails } from 'tmdb-ts';
import type { MovieSearchOptions, TvSearchOptions } from 'tmdb-ts/dist/endpoints';

const tmdb: TMDB = new TMDB(env.TMDB_API_KEY);

export type SearchTypes = 'tv' | 'movie';
export type SearchOptions<T extends SearchTypes> = (T extends 'tv' ? TvSearchOptions : MovieSearchOptions) & { type: T };

export type TvSearchResult = TV & { type: 'tv' };
export type MovieSearchResult = Movie & { type: 'movie' };
export type SearchResults<T extends SearchTypes = SearchTypes> = T extends 'tv'
  ? Search<TvSearchResult>
  : Search<MovieSearchResult>;

export async function search<T extends SearchTypes>(options: SearchOptions<T>): Promise<SearchResults<T> | null> {
  try {
    let response: Search<TV | Movie>;

    if (options.type === 'tv') {
      response = await tmdb.search.tvShows(options);
    } else {
      response = await tmdb.search.movies(options);
    }

    return {
      ...response,
      results: response.results.map((result) => ({ ...result, type: options.type })),
    } as SearchResults<T>;
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
