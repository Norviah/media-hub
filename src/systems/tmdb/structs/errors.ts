/**
 * Error thrown when the API encounters an error that is not handled by the
 * library.
 */
export class UnkownError extends Error {
  /**
   *  Initializes a new `UnkownError` instance.
   *
   * @param error The error message returned by the API.
   */
  public constructor(error: string) {
    super(`An unknown error occurred: ${error}`);
  }
}

/**
 * Error thrown when the API returns a 401 status code.
 */
export class UnknownResourceError extends Error {
  /**
   * Initializes a new `UnknownResourceError` instance.
   */
  public constructor() {
    super('Resource not found');
  }
}

/**
 * Error thrown when the application is rate limited by the API.
 *
 * @see https://developer.themoviedb.org/docs/rate-limiting
 */
export class RateLimitError extends Error {
  /**
   * Initializes a new `RateLimitError` instance.
   */
  public constructor() {
    super('Rate limited');
  }
}

/**
 * Error thrown when a Zod schema fails to validate a response from the API.
 */
export class ParseError extends Error {
  /**
   * Initializes a new `ParserError` instance.
   *
   * @param path The path of the request that failed to parse.
   */
  public constructor(public path: string) {
    super(`Failed to parse response for path: ${path}`);
  }
}
