'use server';

import { TMDB } from 'tmdb-ts';

import { env } from '@/utils/env';
import { parseSearchResults } from '../utils';

import type { MovieDetails, MovieWithMediaType, Search, TVWithMediaType, TimeWindow, TvShowDetails } from 'tmdb-ts';
import type { MovieSearchOptions, MultiSearchOptions, TvSearchOptions } from 'tmdb-ts/dist/endpoints';
import type { MovieQueryOptions, TvShowQueryOptions } from '../types';
import type { Media } from '../utils';

const tmdb: TMDB = new TMDB(env.TMDB_API_KEY);

export async function searchMulti(options: MultiSearchOptions): Promise<Search<Media> | null> {
  try {
    const { results: rawResults, ...rest } = await tmdb.search.multi(options);

    const results = rawResults.filter((result) => result.media_type === 'tv' || result.media_type === 'movie') as (
      | MovieWithMediaType
      | TVWithMediaType
    )[];

    return parseSearchResults({ results, ...rest });
  } catch {
    return null;
  }
}

export async function searchTv(options: TvSearchOptions): Promise<Search<Media> | null> {
  try {
    return parseSearchResults(await tmdb.search.tvShows(options));
  } catch {
    return null;
  }
}

export async function searchMovie(options: MovieSearchOptions): Promise<Search<Media> | null> {
  try {
    return parseSearchResults(await tmdb.search.movies(options));
  } catch {
    return null;
  }
}

export async function discoverTv(options: TvShowQueryOptions): Promise<Search<Media> | null> {
  try {
    return parseSearchResults(await tmdb.discover.tvShow(options));
  } catch {
    return null;
  }
}

export async function discoverMovie(options: MovieQueryOptions): Promise<Search<Media> | null> {
  try {
    return parseSearchResults(await tmdb.discover.movie(options));
  } catch {
    return null;
  }
}

export async function getMovie(id: number): Promise<MovieDetails | null> {
  try {
    const response = await tmdb.movies.details(id);

    if ((response as any).status_code === 34) {
      return null;
    }

    return response;
  } catch {
    return null;
  }
}

export async function getTvShow(id: number): Promise<TvShowDetails | null> {
  try {
    const response = await tmdb.tvShows.details(id);

    if ((response as any).status_code === 34) {
      return null;
    }

    return response;
  } catch {
    return null;
  }
}

export async function getTrending<T extends 'tv' | 'movie'>(type: T, window: TimeWindow): Promise<Search<Media> | null> {
  try {
    return parseSearchResults(await tmdb.trending.trending(type, window));
  } catch {
    return null;
  }
}
