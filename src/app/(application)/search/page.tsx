import { Search } from '@/systems/search/components/Search';
import { SearchSkeleton } from '@/systems/search/components/Skeleton';
import { Suspense } from 'react';

import { defaultFilter, defaultLayout, filters, layouts } from '@/systems/search/util/constants';

import type { PageProps } from '@/types/components/PageProps';

export const metadata = {
  title: 'Search',
  description: 'Search for movies or TV shows.',
};

export default async function SearchPage({ searchParams }: PageProps): Promise<JSX.Element> {
  const filter = filters.find((item) => item.slug === searchParams.filter) || defaultFilter;
  const layout = layouts.find((item) => item.slug === searchParams.layout) || defaultLayout;
  const query = searchParams.q ? (Array.isArray(searchParams.q) ? searchParams.q[0] : searchParams.q) : undefined;

  return (
    <Suspense fallback={<SearchSkeleton query={query} layout={layout.key} />}>
      <Search layout={layout} filter={filter} query={query} />
    </Suspense>
  );
}
