import { imageUrl } from '@/utils/tmdb';

import type { Path } from '@/types/Path';
import type { Movie, TV } from 'tmdb-ts';

export type BasicMediaData = {
  name: string;
  year: string | undefined;
  picture: string;
  overview: string | undefined;
  id: number;
  path: Path;
};

export function parse(media: (TV & { type: 'tv' }) | (Movie & { type: 'movie' })): BasicMediaData {
  const name: string = media.type === 'movie' ? media.title : media.name;
  const year: string | undefined = media.type === 'movie' ? media.release_date : media.first_air_date;
  const picture: string = imageUrl({ path: media.poster_path, alt: name });
  const overview: string = media.overview.length > 0 ? media.overview : '[No description available]';
  const path: Path = `/${media.type}/${media.id}` as Path;

  return { name, year, picture, overview, id: media.id, path };
}
