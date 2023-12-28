import { imageUrl } from '@/utils/tmdb';

import type { MovieSearchResult, TvSearchResult } from '@/actions/tmdb';

export type BasicMediaData = {
  name: string;
  year: string | undefined;
  picture: string;
  overview: string | undefined;
  id: number;
};

export function parse(media: TvSearchResult | MovieSearchResult): BasicMediaData {
  const name: string = media.type === 'movie' ? media.title : media.name;
  const year: string | undefined = media.type === 'movie' ? media.release_date : media.first_air_date;
  const picture: string = imageUrl({ path: media.poster_path, alt: name });
  const overview: string = media.overview.length > 0 ? media.overview : '[No description available]';

  return { name, year, picture, overview, id: media.id };
}
