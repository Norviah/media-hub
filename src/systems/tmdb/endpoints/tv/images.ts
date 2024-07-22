import { TVShowImages } from '../../structs/Schemas';

import { GET } from '../../lib/api';
import { BASE_TV_PATH } from '../../lib/paths';

import type { ZodError } from 'zod';
import type { RateLimitError, UnknownResourceError } from '../../structs';
import type { Language } from '../../types';

export type TVShowImagesOptions = {
  /**
   * The ID of the TV show.
   */
  id: number;

  /**
   * A list of ISO-639-1 language codes to filter image results with.
   */
  imageLanguages?: string[];

  /**
   * The language to display results in.
   */
  language?: Language;

  /**
   * Any additional options to apply to the API request.
   */
  options?: RequestInit;
};

/**
 * Get the images that belong to a TV series.
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {UnknownResourceError} If a TV show with the given ID does not exist.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 *
 * @see https://developer.themoviedb.org/reference/tv-series-images
 * @param options Options for the request.
 * @returns The response.
 */
export async function images({
  id,
  language,
  imageLanguages,
  options,
}: TVShowImagesOptions): Promise<TVShowImages> {
  const queries = {
    include_image_language: imageLanguages?.join(','),
    language,
  };

  return await GET({
    path: `${BASE_TV_PATH}/${id}/images`,
    queries,
    schema: TVShowImages,
    options,
  });
}
