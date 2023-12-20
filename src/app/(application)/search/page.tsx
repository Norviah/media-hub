import { Results } from '@/components/search/Results';
import { SearchForm } from '@/components/search/SearchForm';

import { query } from '@/actions/tmdb';
import { defaultFilter, defaultLayout, filters, layouts } from '@/components/search/constants';

import type { PageProps } from '@/types/components/PageProps';

export const metadata = {
  title: 'Search',
  description: 'Search for movies or TV shows.',
};

export default async function SearchPage({ searchParams }: PageProps): Promise<JSX.Element> {
  const searchValue = searchParams.q ? (Array.isArray(searchParams.q) ? searchParams.q[0] : searchParams.q) : undefined;

  if (!searchValue) {
    return (
      <>
        <div className="mb-4 flex justify-between">
          <SearchForm placeholder={'Search for something!'} />
        </div>
      </>
    );
  }

  const filter = filters.find((item) => item.slug === searchParams.filter) || defaultFilter;
  const layout = layouts.find((item) => item.slug === searchParams.layout) || defaultLayout;
  const results = await query({ prompt: searchValue, type: filter.key });

  if (results === null || searchValue?.length === 0) {
    return (
      <>
        <div className="mb-4 flex justify-between">
          <SearchForm placeholder={searchValue} />
        </div>
        That query didn&apos;t provide any results, please try a new one.
      </>
    );
  }

  return <Results prompt={searchValue} layout={layout.key} initialResults={results} filter={filter.key} />;
}
