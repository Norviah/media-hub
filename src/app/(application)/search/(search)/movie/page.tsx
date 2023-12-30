import { Results } from '@/systems/search/components/results/Results';

import { searchMovie } from '@/actions/tmdb';
import { defaultLayout, layouts } from '@/systems/search/util/constants';
import { getFirstParam } from '@/utils/getFirstParam';

import type { BasicMediaData } from '@/systems/search/util/parse';
import type { PageProps } from '@/types/components/PageProps';
import type { Search } from 'tmdb-ts';
import type { MovieSearchOptions } from 'tmdb-ts/dist/endpoints';

export default async function MovieSearchPage({ searchParams }: PageProps): Promise<JSX.Element> {
  const query = getFirstParam(searchParams, 'q');

  if (!query) {
    return <>Search for something!</>;
  }

  const layout = layouts.find((item) => item.slug === searchParams.layout) || defaultLayout;
  const year = getFirstParam(searchParams, 'year');

  const options: MovieSearchOptions = { query, primary_release_year: Number(year) };
  const data: Search<BasicMediaData> | null = await searchMovie({ ...options, page: 1 });

  async function search(page: number): Promise<Search<BasicMediaData> | null> {
    'use server';
    return await searchMovie({ ...options, page });
  }

  if (!data || data.results.length === 0) {
    return <>No movies found.</>;
  }

  return <Results initialResults={data} layout={layout.key} query={search} />;
}
