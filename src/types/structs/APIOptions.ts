import type { StatusCodes } from 'http-status-codes';
import type { Component } from 'react';

export interface APIOptions {
  /**
   * The endpoint to call.
   */
  endpoint: string;

  /**
   * The data to send to the API.
   */
  data: Record<string, any>;

  /**
   * The HTTP method to use when calling the API.
   */
  method: string;
}

interface BasePromptOptions<T> {
  /**
   * The component to update when the request is made.
   *
   * Throughout the application, there will be components that will reflect
   * the state of the request. For example, a button that is disabled while
   * the request is in progress.
   *
   * This property allows the component to be updated to reflect the state of
   * the request along the process.
   */
  component?: Component<unknown, { loading: boolean }>;

  /**
   * Messages to reply to the user with.
   *
   * After the request is made, the user will be prompted with a message
   * regarding the outcome of the request. This property will be used to
   * define the message to reply with.
   *
   * Each end state can specify the specific message to reply with for a given
   * status code, respective to the status code. The `default` property will
   * be used if no specific message is defined for a given status code.
   *
   */
  codes: {
    fullfilled: Partial<Record<StatusCodes, string>> & { default: string };
    rejected: Partial<Record<StatusCodes, string>> & { default: string };
  };
}

export type PromptOptions<T> = Omit<APIOptions, 'method'> & BasePromptOptions<T>;
