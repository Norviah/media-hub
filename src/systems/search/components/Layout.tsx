'use client';

import { ErrorHandler, SearchControls, SearchMenu, getContext } from '@/systems/search';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import { SearchContext } from '../lib/context';

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

  const context = getContext(record);

  return (
    <SearchContext.Provider value={context}>
      <div className='space-y-7'>
        <SearchMenu />
        <SearchControls />

        <ErrorBoundary errorComponent={ErrorHandler}>{children}</ErrorBoundary>
      </div>
    </SearchContext.Provider>
  );
}
