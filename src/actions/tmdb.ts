'use server';

import { TMDB } from 'tmdb-ts';

import { parse } from '@/systems/search/util/parse';
import { env } from '@/utils/env';

import type { MovieQueryOptions, TvShowQueryOptions } from '@/systems/search/types/QueryOptions';
import type { BasicMediaData } from '@/systems/search/util/parse';
import type { MovieDetails, Search, TimeWindow, TvShowDetails } from 'tmdb-ts';
import type { MovieSearchOptions, TvSearchOptions } from 'tmdb-ts/dist/endpoints';

const tmdb: TMDB = new TMDB(env.TMDB_API_KEY);

export async function searchTv(options: TvSearchOptions): Promise<Search<BasicMediaData> | null> {
  try {
    return parse(await tmdb.search.tvShows(options));
  } catch {
    return null;
  }
}

export async function searchMovie(options: MovieSearchOptions): Promise<Search<BasicMediaData> | null> {
  try {
    return parse(await tmdb.search.movies(options));
  } catch {
    return null;
  }
}

export async function discoverTv(options: TvShowQueryOptions): Promise<Search<BasicMediaData> | null> {
  try {
    return parse(await tmdb.discover.tvShow(options));
  } catch {
    return null;
  }
}

export async function discoverMovie(options: MovieQueryOptions): Promise<Search<BasicMediaData> | null> {
  try {
    return parse(await tmdb.discover.movie(options));
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

export async function getTrending<T extends 'tv' | 'movie'>(
  type: T,
  window: TimeWindow
): Promise<Search<BasicMediaData> | null> {
  try {
    return parse(await tmdb.trending.trending(type, window));
  } catch {
    return null;
  }
}

export type Genre = { id: number; name: string };
