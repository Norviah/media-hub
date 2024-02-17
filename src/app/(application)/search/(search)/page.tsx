import { SearchControls } from '@/systems/search/menu';
import { SearchContainer } from '@/systems/search/results';
import { TrendingPage } from '@/systems/search/trends';

import { parseParams, searchMulti } from '@/systems/search/common';

import type { PageProps } from '@/types/components/PageProps';

export default function SearchPage({ searchParams }: PageProps): JSX.Element {
  const params = parseParams('/search/tv', searchParams);

  if (!params.query) {
    return <TrendingPage />;
  }

  return (
    <>
      <SearchControls />

      <SearchContainer
        params={params}
        NoMediaFound={<p>No results found.</p>}
        action={searchMulti}
        options={{ query: params.query }}
      />
    </>
  );
}
