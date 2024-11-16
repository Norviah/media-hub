import { AggregateCredits } from '../../structs/Schemas';

import { GET } from '../../lib/api';
import { BASE_TV_PATH } from '../../lib/paths';

import type { ZodError } from 'zod';
import type { RateLimitError, UnknownResourceError } from '../../structs';
import type { Language } from '../../types';

export type TVShowAggregateCreditsOptions = {
  /**
   * The ID of the TV show.
   */
  id: number;

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
 * Get the aggregate credits from all seasons of a TV show.
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {UnknownResourceError} If a TV show with the given ID does not exist.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 *
 * @see https://developer.themoviedb.org/reference/tv-series-aggregate-credits
 * @param options Options for the request.
 * @returns The response.
 */
export async function aggregateCredits({
  id,
  language,
  options,
}: TVShowAggregateCreditsOptions): Promise<AggregateCredits> {
  const queries = {
    language,
  };

  return await GET({
    path: `${BASE_TV_PATH}/${id}/aggregate_credits`,
    queries,
    schema: AggregateCredits,
    options,
  });
}
