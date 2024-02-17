import { imageUrl } from '@/utils/tmdb';

import type { Route } from 'next';
import type { Movie, Search, TV } from 'tmdb-ts';

export type Media = {
  /**
   * The name of the media.
   */
  name: string;

  /**
   * The initial release year of the media.
   */
  year: string | undefined;

  /**
   * The TMDB URL for the media's poster image.
   */
  poster: string;

  /**
   * The TMDB URL for the media's backdrop image.
   */
  backdrop: string;

  /**
   * A brief description of the media.
   */
  overview: string;

  /**
   * The media's respective id on TMDB.
   */
  id: number;

  /**
   * The path to the media's respective page on the app.
   */
  path: Extract<Route<`/${'movie' | 'tv'}/${string}`>, `/${'movie' | 'tv'}/${string}`>;
};

type OptionalKeys = 'poster_path' | 'overview' | 'backdrop_path';
type MovieKeys = 'id' | 'title' | 'release_date';
type TVKeys = 'id' | 'name' | 'first_air_date';

type MoviePartial = Pick<Movie, MovieKeys> & Partial<Pick<Movie, OptionalKeys>>;
type TVPartial = Pick<TV, TVKeys> & Partial<Pick<TV, OptionalKeys>>;

/**
 * Parses a TMDB (movie or tv show) search result into a more basic form.
 *
 * As the application uses TMDB's API to search for movies and shows, the data
 * returned from the API differs slightly for each type. This function ensures
 * that regardless of the type of media that is parsed, it presents a more
 * consistent structure for the application to use.
 *
 * @param data The search result to parse.
 * @return The search result parsed to a more basic form.
 */
export function parseMedia(data: MoviePartial | TVPartial): Media {
  const isMovie = 'title' in data;

  const name = isMovie ? data.title : data.name;
  const year = isMovie ? data.release_date : data.first_air_date;
  const poster = imageUrl({ path: data.poster_path, alt: name });
  const backdrop = imageUrl({ path: data.backdrop_path, alt: name });
  const overview = data.overview && data.overview.length > 0 ? data.overview : '[No description available]';
  const path = `/${isMovie ? 'movie' : 'tv'}/${data.id}` as const;

  return { name, year, poster, id: data.id, path, overview, backdrop };
}

/**
 * Parses a TMDB search response to ensure the media results are in a consistent
 * form in addition to keeping the rest of the response data.
 *
 * @param results The response to parse.
 * @returns The response with media results parsed.
 */
export function parseSearchResults({ results, ...rest }: Search<TV | Movie>): Search<Media> {
  return { ...rest, results: results.map(parseMedia) };
}
