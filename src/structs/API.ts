import { StatusCodes } from 'http-status-codes';
import { Toast } from './Toast';

import type { APIOptions, PromptOptions } from '@/types/structs/APIOptions';
import type { Response } from '@/types/structs/Response';

/**
 * A utility class for interacting with the application's API.
 *
 * `API` provides a set of methods for making requests to the application's
 * backend, allowing you to easily send HTTP requests to an endpoint and receive
 * a response.
 *
 * Each method returns a promise resolving to an instance of `Response`, which
 * contains the data returned by the server.
 */
export class API {
  /**
   * The base URL for the application.
   *
   * `URL` is the canonical URL for the application, and is used to construct
   * the final URL for a request. As `API` can be used within the browser, the
   * `NEXT_PUBLIC_NEXTAUTH_URL` environment variable must be exposed to the
   * browser.
   * @see https://nextjs.org/docs/basic-features/environment-variables
   */
  public static URL: string = process.env.NEXT_PUBLIC_NEXTAUTH_URL!;

  /**
   * A helper method to call the API.
   *
   * Givenn an endpoint and data, `Call` will call the API with the provided
   * information and return the response as an instance of `Response`, handling
   * any errors that may occur.
   *
   * `Call` is implemented by other methods, and shouldn't be used directly.
   * @template T The structure of the data returned by the API.
   * @param options The options to use when calling the API.
   * @returns The response from the API.
   */
  private static async Call<T>(options: APIOptions): Promise<Response<T>> {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/${options.endpoint}`, {
        method: options.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: options.data ? JSON.stringify(options.data) : undefined,
      })
        .then(async (response) => {
          return { ok: response.ok, data: await response.json(), status: response.status };
        })
        .catch((error: Error) => {
          return { ok: false, error: error.message, status: StatusCodes.INTERNAL_SERVER_ERROR };
        });

      return response as Response<T>;
    } catch (e: unknown) {
      return { ok: false, error: (e as Error).message, status: StatusCodes.INTERNAL_SERVER_ERROR };
    }
  }

  /**
   * A helper method to call the API with a GET request.
   *
   * Calls the application's API with a `GET` request, returning the response
   * from the server.
   * @param options The options to use when calling the API.
   * @returns The response from the API.
   */
  public static async Get<T>(options: Omit<APIOptions, 'method'>): Promise<Response<T>> {
    return await API.Call<T>({ ...options, method: 'GET' });
  }

  /**
   * A helper method to call the API with a POST request.
   *
   * Calls the application's API with a `POST` request, returning the response
   * from the server.
   * @param options The options to use when calling the API.
   * @returns The response from the API.
   */
  public static async Post<T>(options: Omit<APIOptions, 'method'>): Promise<Response<T>> {
    return await API.Call<T>({ ...options, method: 'POST' });
  }

  /**
   * A helper method to call the API with a confirmation prompt, informing the
   * user of the result of the request.
   *
   * In regards to calling the backend, `Prompt` is identical to `Post`, but the
   * method will also display a toast notification to the user, informing them
   * of the result of the request.
   *
   * The contents of the notification is determined by the `messages` parameter,
   * which is a record containing the messages to display for each state of the
   * request. Each state can either be a string, or a function that resolves
   * into a string, if a function is provided, the function will be called with
   * the response from the server.
   *
   * `Prompt` is intended to be used with a component that has a `loading`
   * state, which is set to `true` when the request is made, and `false` when
   * the request is complete. This allows the component to dynamically render
   * in regards to the state of the request.
   * @template T The structure of the response from the API.
   * @param options The options to use when calling the API.
   * @returns The response from the API.
   */
  public static async Prompt<T>(options: PromptOptions<T>): Promise<Response<T>> {
    // Initially, if a component is provided, we'll set the component's
    // `loading` state to true, indicating that the request is in progress. This
    // allows the component to reflect the state of the request throughout it's
    // children.

    // For example, if a user clicks a button to submit a form, the component
    // can set the disabled state of the button to reflect the `loading` state,
    // once this method is called, the component's `loading` state will be set
    // and the buttons will be disabled.
    if (options.component) {
      options.component.setState({ loading: true });
    }

    const result: Response<T> = await API.Call<T>({ ...options, method: 'POST' });

    // Once the request is complete, we will create a toast notification to
    // inform the user of the result of the request. As previously mentioned,
    // the contents of the notification is determined by the `messages` option.

    // Thus, we'll store the respective message in a variable, and then display
    // the notification to the user.
    const response = result.ok ? options.codes.fullfilled : options.codes.rejected;

    // When displaying the notification, we will use a combination of the
    // endpoint and the result of the request to determine the id of the toast,
    // this ensures that for a given request, only one toast notification will
    // be displayed for a given result.

    Toast[result.ok ? 'Success' : 'Error']({
      message: response[result.status] ?? response.default,
    });

    // Finally, if a component was provided, we will set the component's loading
    // state to false, indicating that the request is complete.
    if (options.component) {
      options.component.setState({ loading: false });
    }

    return result;
  }
}
