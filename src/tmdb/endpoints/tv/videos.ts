import { TVShowVideos } from '../../structs/Schemas';

import { GET } from '../../lib/api';
import { BASE_TV_PATH } from '../../lib/paths';

import type { ZodError } from 'zod';
import type { RateLimitError, UnknownResourceError } from '../../structs';
import type { Language } from '../../types';

export type TVShowVideosOptions = {
  /**
   * The ID of the TV show.
   */
  id: number;

  /**
   * Specify the language(s) to filter the videos with.
   */
  videoLanguages?: string[];

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
 * Get the videos that belong to a TV show.
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {UnknownResourceError} If a TV show with the given ID does not exist.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 *
 * @see https://developer.themoviedb.org/reference/tv-series-videos
 * @param options Options for the request.
 * @returns The response.
 */
export async function videos({
  id,
  language,
  videoLanguages,
  options,
}: TVShowVideosOptions): Promise<TVShowVideos> {
  const queries = {
    include_video_language: videoLanguages?.join(','),
    language,
  };

  return await GET({
    path: `${BASE_TV_PATH}/${id}/videos`,
    queries,
    schema: TVShowVideos,
    options,
  });
}
