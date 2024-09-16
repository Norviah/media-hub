'use client';

import { ErrorHandler, SearchControls, SearchMenu, SearchParamsSchema } from '@/systems/search';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';

import { genres } from '@/systems/tmdb';
import { useSearchParams } from 'next/navigation';

import type { LayoutProps } from '@/types';

export function SearchLayout({ children }: LayoutProps): JSX.Element {
  const searchParams = useSearchParams();
  const record: Record<string, unknown> = {};

  for (const key of searchParams.keys()) {
    const value = searchParams.getAll(key);

    if (value.length > 1) {
      record[key] = value;
    } else {
      record[key] = value[0];
    }
  }

  const params = SearchParamsSchema.parse(record);

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
