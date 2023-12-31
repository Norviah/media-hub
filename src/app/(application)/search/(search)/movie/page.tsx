import { Results } from '@/systems/search/components/results/Results';

import { discoverMovie, searchMovie } from '@/actions/tmdb';
import { defaultLayout, layouts } from '@/systems/search/util/constants';
import { movieGenres } from '@/systems/search/util/genres';
import { getAllParams, getFirstParam } from '@/utils/getFirstParam';
import { SearchParams } from '@/utils/params';

import type { MovieQueryOptions } from '@/systems/search/types/QueryOptions';
import type { BasicMediaData } from '@/systems/search/util/parse';
import type { PageProps } from '@/types/components/PageProps';
import type { Search, SortOption } from 'tmdb-ts';
import type { MovieSearchOptions } from 'tmdb-ts/dist/endpoints';

type DiscoverMovieProps = {
  params: Record<string, string | string[] | undefined>;
};

async function DiscoverMovie({ params }: DiscoverMovieProps): Promise<JSX.Element> {
  const layout = layouts.find((item) => item.slug === params.layout) || defaultLayout;
  const year = Number(getFirstParam(params, SearchParams.YEAR));
  const genresParams = getAllParams(params, SearchParams.GENRES).map((genre) => genre.toLowerCase());
  const sortParams = getFirstParam(params, SearchParams.SORT);

  const genres = movieGenres.filter((genre) => genresParams.includes(genre.name.toLowerCase()));

  const options: MovieQueryOptions = {
    primary_release_year: Number.isNaN(year) ? undefined : year,
    with_genres: genres.length === 0 ? undefined : genres.map((genre) => genre.id).join(','),
  };

  if (sortParams) {
    options.sort_by = sortParams as SortOption;
  }

  const data: Search<BasicMediaData> | null = await discoverMovie({ ...options, page: 1 });

  if (!data || data.results.length === 0) {
    return <>No tv shows found.</>;
  }

  async function search(page: number): Promise<Search<BasicMediaData> | null> {
    'use server';
    return await discoverMovie({ ...options, page });
  }

  return <Results initialResults={data} layout={layout.key} query={search} />;
}

export default async function MovieSearchPage({ searchParams }: PageProps): Promise<JSX.Element> {
  const query = getFirstParam(searchParams, SearchParams.QUERY);

  const layout = layouts.find((item) => item.slug === searchParams.layout) || defaultLayout;
  const year = getFirstParam(searchParams, SearchParams.YEAR);

  if (!query) {
    return <DiscoverMovie params={searchParams} />;
  }

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
