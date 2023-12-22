'use client';

import { SpinnerIcon } from '@/components/icons/Spinner';
import { Button } from '@/components/ui/Button';
import { SearchContainer } from './Container';
import { MediaItems } from './MediaItems';

import { search } from '@/actions/tmdb';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { toast } from 'sonner';

import type { QueryResult } from '@/actions/tmdb';
import type { Media } from '@/types/Media';
import type { LayoutItem } from './constants';

type Props = {
  prompt: string;
  layout: LayoutItem['key'];
  initialResults: QueryResult;
  filter: Media['type'];
};

export function Results(props: Props): JSX.Element {
  const [movies, setMovies] = useState<Media[]>(props.initialResults.data);
  const [page, setPage] = useState<number>(props.initialResults.page);
  const [state, setState] = useState<'LOADING' | 'ERROR' | 'DONE'>('LOADING');

  const [ref, inView] = useInView();

  async function loadMore(): Promise<void> {
    if (state === 'DONE') {
      return;
    }

    const nextPage = page + 1;

    try {
      const nextMovies = await search({ query: props.prompt, page: nextPage, type: props.filter });

      if (nextMovies?.data.length) {
        if (nextMovies.totlePages === nextMovies.page) {
          setState('DONE');
        } else {
          setPage(nextPage);
        }

        const newMovies = nextMovies.data.filter((result) => !movies.some((movie) => movie.id === result.id));

        setMovies([...movies, ...newMovies]);
      }
    } catch (e) {
      toast.error('Something went wrong, please try again in a bit.');
      setState('ERROR');
    }
  }

  useEffect(() => {
    if (inView && state === 'LOADING') {
      loadMore();
    }
  }, [inView]);

  useEffect(() => {
    setMovies(props.initialResults.data);
    setPage(props.initialResults.page);
    setState(props.initialResults.totlePages === props.initialResults.page ? 'DONE' : 'LOADING');
  }, [props.initialResults]);

  return (
    <SearchContainer
      placeholder={props.prompt}
      header={
        props.prompt ? (
          <p>
            {movies.length === 0
              ? 'There are no results that match '
              : `Showing ${movies.length} ${movies.length > 1 ? 'results' : 'result'} for `}
            <span className="font-bold">&quot;{props.prompt}&quot;</span>
          </p>
        ) : null
      }
    >
      <MediaItems results={movies} layout={props.layout} />
      {!(state === 'DONE') && (
        <div ref={ref} className="mt-5 flex justify-center">
          {state === 'LOADING' ? (
            <SpinnerIcon className="h-6 w-6" />
          ) : (
            <Button
              onClick={() => {
                setState('LOADING');
                loadMore();
              }}
            >
              Try again
            </Button>
          )}
        </div>
      )}
    </SearchContainer>
  );
}
