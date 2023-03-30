import { StatusCodes } from 'http-status-codes';
import type { Response } from '@/src/types/Response';

export class API {
  /**
   * The base URL for the API.
   *
   * Your Next.js application must expose the `NEXT_PUBLIC_BACKEND_URL`
   * environment variable to the browser, allowing the browser access to this
   * variable.
   * @see https://nextjs.org/docs/basic-features/environment-variables
   */
  private static URL: string = process.env.NEXT_PUBLIC_BACKEND_URL!;

  /**
   * A helper method to call the API.
   *
   * Given an endpoint and data, `Call` will call the API with the provided
   * information and return the response as an instance of `Response`, handling
   * any errors that may occur.
   *
   * This method shouldn't be used directly, it is implemented by other methods.
   * @template T The type of data to expect from the API.
   * @param endpoint The endpoint to call.
   * @param data The data to send to the API.
   * @param method The HTTP method to use.
   */
  private static async Call<T>(
    endpoint: string,
    data: Record<string, any>,
    method: 'GET' | 'POST'
  ): Promise<Response<T>> {
    try {
      // Here is where we'll initially call the API, providing any necessary
      // headers and paramers from the method's arguments.
      const response = await fetch(`${API.URL}/${endpoint}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        //
        .then(async (res) => {
          return { success: res.ok, data: res.ok ? await res.json() : null, code: res.status };
        })

        //
        .catch((error: Error) => {
          return { success: false, error: error.message, code: StatusCodes.INTERNAL_SERVER_ERROR };
        });

      return response as Response<T>;
    } catch (error) {
      return { success: false, error: error.message, code: StatusCodes.INTERNAL_SERVER_ERROR };
    }
  }

  public static async Get<T>(endpoint: string, data: Record<string, any>): Promise<Response<T>> {
    return await API.Call<T>(endpoint, data, 'GET');
  }

  public static async Post<T>(endpoint: string, data: Record<string, any>): Promise<Response<T>> {
    return await API.Call<T>(endpoint, data, 'POST');
  }
}
