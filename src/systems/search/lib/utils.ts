import { getImagePath } from '@/systems/tmdb';

import type { Movie, TVShow, PersonSearchResult } from '@/systems/tmdb';
import type { Route } from 'next';

export type Media = {
  /**
   * The name of the media.
   */
  name: string;

  /**
   * The media's respective id on TMDB.
   */
  id: number;

  /**
   * The path to the media's respective page in the application.
   */
  path: Extract<
    Route<`/${'movie' | 'tv' | 'person'}/${string}`>,
    `/${'movie' | 'tv' | 'person'}/${string}`
  >;

  /**
   * The constructed URL for the media's poster image.
   *
   * If the media does not have a poster image, this will instead rperesent a
   * placeholder image with the media's name.
   */
  poster: string;

  /**
   * The type of media.
   */
  type: 'movie' | 'tv' | 'person';

  /**
   * The year the media was released.
   *
   * If the media is a person, this will be `null`.
   */
  year: string | null;
};

export function parseMedia(item: Movie | TVShow | PersonSearchResult): Media {
  const name = item.media_type === 'movie' ? item.title : item.name;
  const imagePath = item.media_type === 'person' ? item.profile_path : item.poster_path;
  const year =
    item.media_type === 'person'
      ? null
      : item.media_type === 'movie'
        ? item.release_date
        : item.first_air_date;

  return {
    name,
    id: item.id,
    poster: getImagePath({ path: imagePath, alt: name }),
    path: `/${item.media_type}/${item.id}` as const,
    type: item.media_type,
    year,
  };
}
