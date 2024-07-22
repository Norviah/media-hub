/**
 * The base URL for TMDB's API.
 *
 * @see https://developer.themoviedb.org/reference/intro/getting-started
 */
export const BASE_URL = 'https://api.themoviedb.org/3' as const;

/**
 * The base URL for building an image URL.
 *
 * @see https://developer.themoviedb.org/docs/image-basics
 */
export const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original' as const;

export const BASE_TV_PATH = '/tv' as const;
export const BASE_MOVIE_PATH = '/movie' as const;
export const BASE_PERSON_PATH = '/person' as const;
export const BASE_SEARCH_PATH = '/search' as const;
export const BASE_DISCOVER_PATH = '/discover' as const;
export const BASE_GENRE_PATH = '/genre' as const;
