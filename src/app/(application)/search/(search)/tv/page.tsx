import { Results } from '@/systems/search/components/results/Results';

import { discoverTv, searchTv } from '@/actions/tmdb';
import { defaultLayout, layouts } from '@/systems/search/util/constants';
import { getAllParams, getFirstParam } from '@/utils/getFirstParam';
import { SearchParams } from '@/utils/params';
import { tvGenres } from '@/systems/search/util/genres';

import type { BasicMediaData } from '@/systems/search/util/parse';
import type { PageProps } from '@/types/components/PageProps';
import type { Search, SortOption } from 'tmdb-ts';
import type { TvSearchOptions } from 'tmdb-ts/dist/endpoints';
import type { TvShowQueryOptions } from '@/systems/search/types/QueryOptions';

type DiscoverTVProps = {
  params: Record<string, string | string[] | undefined>;
};

async function DiscoverTV({ params }: DiscoverTVProps): Promise<JSX.Element> {
  const layout = layouts.find((item) => item.slug === params.layout) || defaultLayout;
  const year = Number(getFirstParam(params, SearchParams.YEAR));
  const genresParams = getAllParams(params, SearchParams.GENRES).map((genre) => genre.toLowerCase());
  const sortParams = getFirstParam(params, SearchParams.SORT);

  const genres = tvGenres.filter((genre) => genresParams.includes(genre.name.toLowerCase()));

  const options: TvShowQueryOptions = {
    first_air_date_year: Number.isNaN(year) ? undefined : year,
    with_genres: genres.length === 0 ? undefined : genres.map((genre) => genre.id).join(','),
  };

  if (sortParams) {
    options.sort_by = sortParams as SortOption;
  }

  const data: Search<BasicMediaData> | null = await discoverTv({ ...options, page: 1 });

  if (!data || data.results.length === 0) {
    return <>No tv shows found.</>;
  }

  async function search(page: number): Promise<Search<BasicMediaData> | null> {
    'use server';
    return await discoverTv({ ...options, page });
  }

  return <Results initialResults={data} layout={layout.key} query={search} />;
}

export default async function TVSearchPage({ searchParams }: PageProps): Promise<JSX.Element> {
  const query = getFirstParam(searchParams, SearchParams.QUERY);

  const layout = layouts.find((item) => item.slug === searchParams.layout) || defaultLayout;
  const year = getFirstParam(searchParams, SearchParams.YEAR);

  if (!query) {
    return <DiscoverTV params={searchParams} />;
  }

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
