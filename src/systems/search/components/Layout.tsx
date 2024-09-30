'use client';

import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import { ErrorHandler, SearchControls, SearchMenu } from '../components';
import { SearchContext } from '../lib/context';

import { useSearchParams } from 'next/navigation';
import { SearchState, getContext } from '../lib';

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
        {context.state !== SearchState.TRENDING && <SearchControls />}

        <ErrorBoundary errorComponent={ErrorHandler}>{children}</ErrorBoundary>
      </div>
    </SearchContext.Provider>
  );
}
