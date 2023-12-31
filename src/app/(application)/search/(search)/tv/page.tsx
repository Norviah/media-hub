import { Results } from '@/systems/search/components/results/Results';

import { discoverTv, searchTv } from '@/actions/tmdb';
import { parseParams } from '@/systems/search/util/parseParams';

import type { TvShowQueryOptions } from '@/systems/search/types/QueryOptions';
import type { BasicMediaData } from '@/systems/search/util/parse';
import type { ParsedParams } from '@/systems/search/util/parseParams';
import type { PageProps } from '@/types/components/PageProps';
import type { Search } from 'tmdb-ts';
import type { TvSearchOptions } from 'tmdb-ts/dist/endpoints';

type DiscoverTVProps = {
  params: ParsedParams;
};

async function DiscoverTV({ params }: DiscoverTVProps): Promise<JSX.Element> {
  const options: TvShowQueryOptions = {
    first_air_date_year: params.year,
    with_genres: params.genres.length === 0 ? undefined : params.genres.map((genre) => genre.id).join(','),
    sort_by: params.sort.value,
  };

  const data: Search<BasicMediaData> | null = await discoverTv({ ...options, page: 1 });

  if (!data || data.results.length === 0) {
    return <>No tv shows found.</>;
  }

  async function search(page: number): Promise<Search<BasicMediaData> | null> {
    'use server';
    return await discoverTv({ ...options, page });
  }

  return <Results initialResults={data} layout={params.layout.key} query={search} />;
}

export default async function TVSearchPage({ searchParams }: PageProps): Promise<JSX.Element> {
  const params = parseParams('/search/tv', searchParams);

  if (!params.query) {
    return <DiscoverTV params={params} />;
  }

  const options: TvSearchOptions = { query: params.query, first_air_date_year: params.year };
  const data: Search<BasicMediaData> | null = await searchTv({ ...options, page: 1 });

  async function search(page: number): Promise<Search<BasicMediaData> | null> {
    'use server';
    return await searchTv({ ...options, page });
  }

  if (!data || data.results.length === 0) {
    return <>No tv shows found.</>;
  }

  return <Results initialResults={data} layout={params.layout.key} query={search} />;
}
