import { Button } from '@/components/ui';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { toast } from 'sonner';

import type { SearchResult } from '@/tmdb';

export const LoadingState = {
  /**
   * Indicates whether if the system is currently loading data.
   */
  LOADING: 'LOADING',

  /**
   * Indicates whether if the system has encountered an error while fetching
   * data.
   *
   * If the system encounters an error, it will notify the user and provide a
   * button that the user can click to attempt to re-fetch the data.
   */
  ERROR: 'ERROR',

  /**
   * Indicates whether if the system has finished loading all pages of data.
   */
  FINISHED: 'FINISHED',

  /**
   * Indicates whether if the system is idle and waiting to load more data.
   *
   * This basically represents when the system is waiting for the component
   * reference to be in view to load more data.
   */
  IDLE: 'IDLE',
} as const;

/**
 * Represents the various states that the system can be in.
 */
export type LoadingState = (typeof LoadingState)[keyof typeof LoadingState];

/**
 * The basic data structure that the system will support.
 *
 * The system must be given a structure that contains an `id` field to be able
 * to uniquely identify each item.
 */
export type BasicDataStructure = {
  id: number;
};

/**
 * @template T The type of data that the system will handle.
 */
export type InfiniteLoadingArgs<T extends BasicDataStructure> = {
  /**
   * The initial set of results to render.
   *
   * This property contains the data fetched from the server during the initial
   * page load, which will also contain additinoal meta information. This data
   * should be fetched from the server and passed to the client.
   *
   * As users scroll, i.e. when the reference element is in view, the system
   * will fetch more data.
   */
  initialResults: SearchResult<T>;

  /**
   * The server action that queries a specific page of data.
   *
   * @param page The page number to query.
   * @returns The search result for the specified page.
   */
  queryPage: (page: number) => Promise<SearchResult<T>>;

  /**
   * The message to display when an error occurs while fetching additional data.
   *
   * If an error occurs while fetching additional data, the system will display
   * an error message to the user with a button that the user can click to
   * attempt to re-fetch the data.
   *
   * If this property is not provided, the system will display a generic error
   * message.
   */
  errorText?: string;

  /**
   * The delay before fetching the next page of data.
   */
  delay?: number | null;
};

/**
 * @template T The type of data that the system will handle.
 */
export type InfiniteLoadingResult<T extends BasicDataStructure> = {
  /**
   * The current set of data that has been loaded.
   */
  data: T[];

  /**
   * The current state of the system.
   */
  state: LoadingState;

  /**
   * A reference to the element that triggers loading more data when in view.
   *
   * This reference should be assigned to an element in the UI that, when in view,
   * will trigger the loading of more data. Typically, this is the element at the
   * bottom of the list of items that the user is scrolling through.
   *
   * @see https://github.com/thebuilder/react-intersection-observer/tree/main
   */
  viewRef: (node?: Element | null) => void;
};

/**
 * A hook for implementing infinite scrolling and data fetching using a
 * paginated system.
 *
 * Given an initial set of results and a server action to query pages, this hook
 * manages the loading of additional data as the user scrolls down the page in
 * addition to handling various states during the loading process.
 *
 * @see https://github.com/thebuilder/react-intersection-observer/tree/main
 * @example
 *
 * ```tsx
 * "use client";
 *
 * export function InfiniteLoading(): JSX.Element {
 *   const { data, state, viewRef } = useInfiniteLoading({
 *     /* ... *\/
 *   });
 *
 *   return (
 *     <div>
 *       {/* loop through `data` and render items *\/}
 *
 *       <div ref={viewRef} />
 *     </div>
 *   );
 * }
 * ```
 */
export function useInfiniteLoading<T extends BasicDataStructure>({
  initialResults,
  queryPage,
  errorText = 'An error occurred while fetching additional data.',
  delay = 500,
}: InfiniteLoadingArgs<T>): InfiniteLoadingResult<T> {
  const { results, page: initialPage, total_pages } = initialResults;

  const [data, setData] = useState<T[]>(results);
  const [page, setPage] = useState(initialPage);
  const [hasMorePages, setHasMorePages] = useState(initialPage < total_pages);
  const [state, setState] = useState<LoadingState>(hasMorePages ? 'IDLE' : 'FINISHED');
  const [viewRef, inView] = useInView();

  let errorToastId: string | number | null = null;

  /**
   * Loads the next page of data.
   */
  async function loadNextPage(): Promise<void> {
    if (state === LoadingState.LOADING || state === LoadingState.FINISHED) {
      return;
    }

    if (errorToastId) {
      toast.dismiss(errorToastId);
    }

    setState(LoadingState.LOADING);
    const nextPage = page + 1;

    try {
      if (delay) {
        await new Promise((resolve) => setTimeout(resolve, delay));
      }

      const response = await queryPage(nextPage);
      const newData: T[] = [];

      for (const result of response.results) {
        if (!data.some((item) => item.id === result.id)) {
          newData.push(result);
        }
      }

      setData((prev) => prev.concat(newData));

      if (response.total_pages === response.page) {
        setState(LoadingState.FINISHED);
      } else {
        setState(LoadingState.IDLE);
      }

      setHasMorePages(nextPage < response.total_pages);
      setPage(nextPage);
    } catch {
      const toastId = toast.error(errorText, {
        action: (
          <Button
            onClick={loadNextPage}
            size='sm'
            variant='outline'
            className='w-20 resize-none text-foreground-light hover:text-foreground'
          >
            Retry
          </Button>
        ),
        dismissible: false,
        // biome-ignore lint/style/useNumberNamespace: Use `Infinity` as that's what the docs use.
        duration: Infinity,
      });

      errorToastId = toastId;

      setState(LoadingState.ERROR);
    }
  }

  useEffect(() => {
    if (inView && state === LoadingState.IDLE) {
      loadNextPage();
    }
  }, [inView, state]);

  return { data, state, viewRef };
}
