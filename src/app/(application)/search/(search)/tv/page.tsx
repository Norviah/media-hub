import { Results } from '@/systems/search/components/results/Results';

import { searchTv } from '@/actions/tmdb';
import { defaultLayout, layouts } from '@/systems/search/util/constants';
import { getFirstParam } from '@/utils/getFirstParam';
import { SearchParams } from '@/utils/params';

import type { BasicMediaData } from '@/systems/search/util/parse';
import type { PageProps } from '@/types/components/PageProps';
import type { Search } from 'tmdb-ts';
import type { TvSearchOptions } from 'tmdb-ts/dist/endpoints';

export default async function TVSearchPage({ searchParams }: PageProps): Promise<JSX.Element> {
  const query = getFirstParam(searchParams, SearchParams.QUERY);

  if (!query) {
    return <>Search for something!</>;
  }

  const layout = layouts.find((item) => item.slug === searchParams.layout) || defaultLayout;
  const year = getFirstParam(searchParams, SearchParams.YEAR);

  const options: TvSearchOptions = { query, first_air_date_year: Number(year) };
  const data: Search<BasicMediaData> | null = await searchTv({ ...options, page: 1 });

  async function search(page: number): Promise<Search<BasicMediaData> | null> {
    'use server';
    return await searchTv({ ...options, page });
  }

  if (!data || data.results.length === 0) {
    return <>No tv shows found.</>;
  }

  return <Results initialResults={data} layout={layout.key} query={search} />;
}
