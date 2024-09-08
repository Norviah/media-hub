import { StatusCodes } from 'http-status-codes';
import { RateLimitError, UnknownResourceError, UnkownError } from '../structs';

import { BASE_IMAGE_URL } from './paths';

/**
 * Generates a query string from the provided object.
 *
 * From the provided object, this function will then generate a query string
 * that can be appended to a URL, with the values pulled from the object. If
 * a value is `undefined`, it will be ignored.
 *
 * @param queries The object to generate the query string from.
 * @returns The generated query string.
 * @example
 *
 * ```ts
 * const params = {
 *   query: "The Office",
 *   year: 2010,
 * };
 *
 * parseQueryParams(params); // => "?query=The%20Office&year=2010"
 * ```
 */
export function parseQueryParams(
  queries: Record<string, string | boolean | number | undefined>,
): string {
  const parameters = new URLSearchParams();

  for (const [key, value] of Object.entries(queries)) {
    if (value !== undefined) {
      parameters.append(key, value.toString());
    }
  }

  return `?${parameters.toString()}`;
}

export type GetImagePathArgs = {
  /**
   * The image's file path.
   *
   * @example '/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg'
   */
  path: string | null | undefined;

  /**
   * The image's alt text.
   *
   * If the image couldn't be found, whether if a file path is provided or not,
   * this text will be used to generate a placeholder image.
   */
  alt: string;

  /**
   * The dimensions for the placeholder image.
   */
  altDimensions?: `${number}x${number}`;
};

/**
 * A helper function to construct a full URL for an image.
 *
 * When TMDB gives an image within their API, they only give the image's unique
 * id and extension, not the full URL. This function will take what's given and
 * generate the full URL for the image.
 *
 * If a file path isn't provided, or the image couldn't be found, a placeholder
 * image will be generated instead.
 *
 * @param params The parameters for the image.
 * @returns The full URL for the image.
 */
export function getImagePath({ path, alt, altDimensions }: GetImagePathArgs): string {
  if (path) {
    return `${BASE_IMAGE_URL}${path}`;
  }

  return generatePlaceholderImage({ alt, dimensions: altDimensions });
}

export type PlaceholderImageArgs = {
  /**
   * The alt text for the placeholder image.
   */
  alt: string;

  /**
   * The dimensions for the placeholder image.
   */
  dimensions?: `${number}x${number}`;
};

/**
 * Generates a placeholder image with the given text.
 *
 * @see https://placehold.co/
 * @returns The URL for the placeholder image.
 */
export function generatePlaceholderImage({
  alt,
  dimensions = '400x600',
}: PlaceholderImageArgs): string {
  return `https://placehold.co/${dimensions}/EEE/31343C?font=lato&text=${encodeURI(alt)}`;
}

/**
 * Handles any errors that occur during an API request.
 *
 * If a response is not successful, this function will throw an error based on
 * the status code of the response.
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {UnknownResourceError} If a TV show with the given ID does not exist.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 */
export function handleError(response: Response): never {
  if (response.status === StatusCodes.NOT_FOUND) {
    throw new UnknownResourceError();
  }

  if (response.status === StatusCodes.TOO_MANY_REQUESTS) {
    throw new RateLimitError();
  }

  throw new UnkownError(response.statusText);
}
