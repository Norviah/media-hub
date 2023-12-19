'use server';

import { env } from '@/utils/env';

import type { Media } from '@/types/Media';
import type { Movie, Search, TV } from '@/types/tmdb';

type Props = {
  prompt: string;
  page?: number;
  type: Media['type'];
};

export type QueryResult = {
  data: Media[];
  page: number;
  totlePages: number;
};

export async function query({ prompt, page = 1, type }: Props): Promise<QueryResult | null> {
  const url = `https://api.themoviedb.org/3/search/${type}?query=${prompt}&include_adult=false&language=en-US&page=${page}`;

  const tmdbOptoins = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${env.TMDB_API_KEY}`,
    },
  };

  const r: Search<TV | Movie> | null = await fetch(url, tmdbOptoins)
    .then((res) => res.json())
    .then((json) => {
      return json;
    })
    .catch((err) => {
      return null;
    });

  if (r === null) {
    return null;
  }

  return {
    data: r.results.map((media) => ({ ...media, type })) as Media[],
    page: r.page,
    totlePages: r.total_pages,
  };
}
