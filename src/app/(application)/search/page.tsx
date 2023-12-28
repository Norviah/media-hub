import { Search } from '@/systems/search/components/results/Search';
import { SearchSkeleton } from '@/systems/search/components/results/Skeleton';
import { SearchForm } from '@/systems/search/components/filters/SearchForm';
import { Suspense } from 'react';

import { defaultFilter, defaultLayout, filters, layouts } from '@/systems/search/util/constants';

import type { PageProps } from '@/types/components/PageProps';

export default function SearchPage({ searchParams }: PageProps): JSX.Element {
  const filter = filters.find((item) => item.slug === searchParams.filter) || defaultFilter;
  const layout = layouts.find((item) => item.slug === searchParams.layout) || defaultLayout;
  const query = searchParams.q ? (Array.isArray(searchParams.q) ? searchParams.q[0] : searchParams.q) : undefined;

  return (
    <>
      <SearchForm query={query} />
      {query ? (
        <Suspense fallback={<SearchSkeleton layout={layout.key} />}>
          <Search query={query} layout={layout.key} filter={filter.key} />
        </Suspense>
      ) : (
        'Search for something!'
      )}
    </>
  );
}
