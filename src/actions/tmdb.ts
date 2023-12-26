'use server';

import { env } from '@/utils/env';

import type { Media } from '@/types/Media';
import type { Movie, MovieDetails, Search, TV, TvShowDetails } from '@/types/tmdb';

const BASE_URL: string = 'https://api.themoviedb.org/3';
const TMDB_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${env.TMDB_API_KEY}`,
  },
};

type SearchProps = {
  query: string;
  page?: number;
  type: Media['type'];
};

export type QueryResult = {
  data: Media[];
  page: number;
  totalPages: number;
};

export async function search({ query: prompt, page = 1, type }: SearchProps): Promise<QueryResult | null> {
  const url = `${BASE_URL}/search/${type}?query=${prompt}&include_adult=false&language=en-US&page=${page}`;

  const r: Search<TV | Movie> | null = await fetch(url, TMDB_OPTIONS)
    .then((res) => res.json())
    .catch(() => {
      return null;
    });

  if (r === null) {
    return null;
  }

  return {
    data: r.results.map((media) => ({ ...media, type })) as Media[],
    page: r.page,
    totalPages: r.total_pages,
  };
}

type DetailsProps<T extends TvShowDetails | MovieDetails> = {
  id: number;
  type: T extends TvShowDetails ? 'tv' : 'movie';
};

export type Details<T extends TvShowDetails | MovieDetails> = T extends TvShowDetails
  ? TvShowDetails & { type: 'tv' }
  : MovieDetails & { type: 'movie' };

export async function details<T extends TvShowDetails | MovieDetails>({
  id,
  type,
}: DetailsProps<T>): Promise<Details<T> | null> {
  const url: string = `${BASE_URL}/${type}/${id}?language=en-US`;

  const result: TvShowDetails | MovieDetails | null = await fetch(url, TMDB_OPTIONS)
    .then((res) => res.json())
    .catch(() => {
      return null;
    });

  return (result ? { ...result, type: type } : null) as Details<T>;
}
