'use client';

import { SpinnerIcon } from '@/components/icons/Spinner';
import { Button } from '@/components/ui/Button';
import { Grid } from './Grid';

import { searchMovies, searchTvShows } from '@/actions/tmdb';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { toast } from 'sonner';

import type { MovieSearchResult, TvSearchResult } from '@/actions/tmdb';
import type { Search } from 'tmdb-ts';
import type { FilterItem, LayoutItem } from '../../util/constants';

type Props = {
  initialResults: Search<TvSearchResult | MovieSearchResult>;
  filter: FilterItem['key'];
  layout: LayoutItem['key'];
  query: string;
};

enum States {
  LOADING,
  ERROR,
  FINISHED,
}

export function Results({ initialResults, layout, filter, query }: Props): JSX.Element {
  const [results, setResults] = useState<(TvSearchResult | MovieSearchResult)[]>(initialResults.results);
  const [page, setPage] = useState<number>(initialResults.page);
  const [state, setState] = useState<States>(
    initialResults.page === initialResults.total_pages ? States.FINISHED : States.LOADING
  );

  const [ref, inView] = useInView();

  async function loadNextPage(): Promise<void> {
    if (state === States.FINISHED) {
      return;
    }

    setState(States.LOADING);
    const nextPage = page + 1;

    try {
      let response: Search<TvSearchResult | MovieSearchResult> | null;

      if (filter === 'tv') {
        response = await searchTvShows({ query, page: nextPage });
      } else {
        response = await searchMovies({ query, page: nextPage });
      }

      if (response?.results && response.results.length > 0) {
        if (response.total_pages === response.page) {
          setState(States.FINISHED);
        } else {
          setPage(nextPage);
        }

        const newData = response.results.filter((result) => !results.some((item) => item.id === result.id));
        setResults([...results, ...newData]);
      }
    } catch {
      toast.error('Something went wrong while fetching the next page.');
      setState(States.ERROR);
    }
  }

  useEffect(() => {
    if (inView) {
      loadNextPage();
    }
  }, [inView]);

  useEffect(() => {
    setResults(initialResults.results);
    setPage(initialResults.page);
    setState(initialResults.total_pages === initialResults.page ? States.FINISHED : States.LOADING);
  }, [initialResults]);

  return (
    <>
      <Grid results={results} layout={layout} />
      {!(state === States.FINISHED) && (
        <div ref={ref} className="mt-5 flex justify-center">
          {state === States.LOADING ? (
            <SpinnerIcon className="h-6 w-6" />
          ) : (
            <Button
              onClick={() => {
                loadNextPage();
              }}
            >
              Try again
            </Button>
          )}
        </div>
      )}
    </>
  );
}
