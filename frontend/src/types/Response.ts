import type { StatusCodes } from 'http-status-codes';

export interface BaseResponse<T> {
  /**
   * A boolean indicating whether the response was successful (status in the
   * range 200 – 299) or not.
   *
   * `ok` represents the event where the request went through successfully and
   * the desired logic was executed.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
   */
  ok: boolean;

  /**
   * The status code of the response.
   */
  status: StatusCodes;

  /**
   * The data returned by the request.
   *
   * If the request was successful, this will be the data returned by the
   * server.
   */
  data?: T | undefined;

  /**
   * The resolved error message.
   *
   * If the request was not successful, this will be the error message returned
   * by the server.
   */
  error: string | undefined;
}

export interface Success<T> extends BaseResponse<T> {
  /**
   * Whether if the request was successful.
   */
  ok: true;

  /**
   * The data returned by the request.
   */
  data: T;
}

export interface Failure extends BaseResponse<any> {
  /**
   * Whether if the request was successful.
   */
  ok: false;

  /**
   * The resolved error message.
   */
  error: string | undefined;

  /**
   * The data returned by the request.
   */
  data?: undefined;
}

/**
 * Represents the structure of a response from the server.
 */
export type Response<T> = Success<T> | Failure;
