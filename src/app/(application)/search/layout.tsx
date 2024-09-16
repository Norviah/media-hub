'use client';

import { ErrorHandler, SearchControls, SearchMenu, SearchParamsSchema } from '@/systems/search';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';

import { genres } from '@/systems/tmdb';
import { useSearchParams } from 'next/navigation';

import type { LayoutProps } from '@/types';

export default function SearchLayout({ children }: LayoutProps): JSX.Element {
  const searchParams = useSearchParams();
  const params = SearchParamsSchema.parse(Object.fromEntries(searchParams));

  const genresList = params.type && params.type !== 'person' ? genres[params.type] : [];
  const pickedGenres = genresList.filter((genre) => params.genres.includes(genre.name));

  return (
    <div className='space-y-7'>
      <SearchMenu params={params} genresList={genresList} pickedGenres={pickedGenres} />
      <SearchControls params={params} genres={pickedGenres} />

      <ErrorBoundary errorComponent={ErrorHandler}>{children}</ErrorBoundary>
    </div>
  );
}
