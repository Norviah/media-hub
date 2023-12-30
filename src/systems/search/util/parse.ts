import { imageUrl } from '@/utils/tmdb';

import type { Route } from 'next';
import type { Movie, Search, TV } from 'tmdb-ts';

export type BasicMediaData = {
  name: string;
  year: string | undefined;
  picture: string;
  overview: string | undefined;
  id: number;
  path: Route<`/${'movie' | 'tv'}/${string}`>;
};

function isMovie(item: TV | Movie): item is Movie {
  return 'title' in item;
}

export function parse({ results, ...rest }: Search<TV | Movie>): Search<BasicMediaData> {
  const parsed = results.map((item: TV | Movie) => {
    const itemIsMovie = isMovie(item);

    const name: string = itemIsMovie ? item.title : item.name;
    const year: string | undefined = itemIsMovie ? item.release_date : item.first_air_date;
    const picture: string = imageUrl({ path: item.poster_path, alt: name });
    const overview: string = item.overview.length > 0 ? item.overview : '[No description available]';
    const path: Route<`/${'movie' | 'tv'}/${string}`> = `/${itemIsMovie ? 'movie' : 'tv'}/${item.id}`;

    return { name, year, picture, overview, id: item.id, path };
  });

  return { ...rest, results: parsed };
}
