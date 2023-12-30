import { Header } from '@/components/ui/typography/Header';
import { TrendingMovies } from '@/systems/search/components/trends/Movies';
import { RowSkeleton } from '@/systems/search/components/trends/Row';
import { TrendingTVShows } from '@/systems/search/components/trends/TV';
import { Suspense } from 'react';

export default function SearchPage(): JSX.Element {
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
