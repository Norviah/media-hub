import { Header } from '@/components/ui/typography/Header';
import { Suspense } from 'react';
import { TrendingMovies } from './Movies';
import { RowSkeleton } from './Row';
import { TrendingTVShows } from './TV';

export function TrendingPage(): JSX.Element {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <Header type="h4">Trending Movies</Header>
        <Suspense fallback={<RowSkeleton />}>
          <TrendingMovies />
        </Suspense>
      </div>

      <div className="flex flex-col gap-5">
        <Header type="h4">Trending TV Shows</Header>
        <Suspense fallback={<RowSkeleton />}>
          <TrendingTVShows />
        </Suspense>
      </div>
    </div>
  );
}
