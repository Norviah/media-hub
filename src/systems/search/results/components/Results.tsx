'use client';

import { SpinnerIcon } from '@/components/icons/Spinner';
import { Button } from '@/components/ui/Button';
import { Grid } from './Grid';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { toast } from 'sonner';

import type { Search } from 'tmdb-ts';
import type { Media, LayoutItem } from '../../common/utils';

type Props = {
  initialResponse: Search<Media>;
  layout: LayoutItem['key'];
  query: (page: number) => Promise<Search<Media> | null>;
};

enum States {
  LOADING,
  ERROR,
  FINISHED,
}

export function Results({ initialResponse, layout, query }: Props): JSX.Element {
  const [results, setResults] = useState<Media[]>(initialResponse.results);
  const [page, setPage] = useState<number>(initialResponse.page);
  const [state, setState] = useState<States>(
    initialResponse.page === initialResponse.total_pages ? States.FINISHED : States.LOADING
  );

  const [ref, inView] = useInView();

  async function loadNextPage(): Promise<void> {
    if (state === States.FINISHED) {
      return;
    }

    setState(States.LOADING);
    const nextPage = page + 1;

    try {
      const response = await query(nextPage);

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
    setResults(initialResponse.results);
    setPage(initialResponse.page);
    setState(initialResponse.total_pages === initialResponse.page ? States.FINISHED : States.LOADING);
  }, [initialResponse]);

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
