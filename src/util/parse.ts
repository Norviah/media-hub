import { Config, ConfigError, ErrorCodes } from '@norviah/config';
import { StatusCodes } from 'http-status-codes';

import type { JsonObject } from 'type-fest';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { Structure } from '@norviah/config';

/**
 *
 */
const codes: ErrorCodes[] = [ErrorCodes.INVALID_TYPE, ErrorCodes.REQUIRED_KEY];

/**
 * Parses the request body against `T`.
 *
 * `parser` is a helper function that will validate a body of a request,
 * ensuring that the body is of the correct type. If the body does not match the
 * structure, the function will respond to the request.
 *
 * If the body is valid, the function will return an instance of `T`, with the
 * values parsed from the request body.
 * @template T The desired structure of the request body.
 * @param req The request object.
 * @param res The response object.
 * @param structure The structure of the request body.
 * @returns An instance of `T` with the values parsed from the request body.
 */
export function parse<T extends Record<string, any>>(params: {
  req: NextApiRequest;
  res: NextApiResponse;
  structure: Structure<T>;
  json: JsonObject | string;
}): T | void | never {
  let parsed: T;

  try {
    parsed = Config.Parse<T>({
      structure: params.structure,
      json: params.json === 'string' ? JSON.parse(params.req.body) : params.json,
    });
  } catch (error) {
    // When an error occurs, we'll consider what kind of error it is. Initially,
    // we'll check if the error is an instance of `ConfigError`, which is the
    // error thrown by the config package.

    // If the error is thrown by the package, we'll check if the error is one of
    // the following codes: INVALID_TYPE or REQUIRED_KEY. As these codes
    // represents errors involving a specific field.

    if (!(error instanceof ConfigError) || !codes.includes(error.code)) {
      throw error;
    }

    // Once we've determined that the error is an instance of `ConfigError` and
    // the error code is one of the codes we're interested in, we'll grab a
    // reference to the respective arguments for the two codes.
    const { args } = error as
      | ConfigError<ErrorCodes.INVALID_TYPE>
      | ConfigError<ErrorCodes.REQUIRED_KEY>;

    return params.res
      .status(StatusCodes.BAD_REQUEST)
      .json({ field: args[0], message: error.message });
  }

  return parsed;
}
