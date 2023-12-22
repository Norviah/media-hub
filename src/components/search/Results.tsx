'use client';

import { SpinnerIcon } from '@/components/icons/Spinner';
import { SearchContainer } from './Container';
import { MediaItems } from './MediaItems';

import { search } from '@/actions/tmdb';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

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
  const [ref, inView] = useInView();
  const [done, setDone] = useState<boolean>(props.initialResults.totlePages === props.initialResults.page);

  async function loadMore(): Promise<void> {
    if (done) {
      return;
    }

    const nextPage = page + 1;
    const nextMovies = await search({ query: props.prompt, page: nextPage, type: props.filter });

    if (nextMovies?.data.length) {
      if (nextMovies.totlePages === nextMovies.page) {
        setDone(true);
      } else {
        setPage(nextPage);
      }

      const newMovies = nextMovies.data.filter((result) => !movies.some((movie) => movie.id === result.id));

      setMovies([...movies, ...newMovies]);
    }
  }

  useEffect(() => {
    if (inView) {
      loadMore();
    }
  }, [inView]);

  useEffect(() => {
    setMovies(props.initialResults.data);
    setPage(props.initialResults.page);
    setDone(props.initialResults.totlePages === props.initialResults.page);
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
      {!done && (
        <div ref={ref} className="mt-5 flex justify-center">
          <SpinnerIcon className="h-6 w-6" />
        </div>
      )}
    </SearchContainer>
  );
}
