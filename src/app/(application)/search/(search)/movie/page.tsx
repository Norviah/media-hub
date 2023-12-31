import { Results } from '@/systems/search/components/results/Results';

import { discoverMovie, searchMovie } from '@/actions/tmdb';
import { parseParams } from '@/systems/search/util/parseParams';

import type { MovieQueryOptions } from '@/systems/search/types/QueryOptions';
import type { BasicMediaData } from '@/systems/search/util/parse';
import type { ParsedParams } from '@/systems/search/util/parseParams';
import type { PageProps } from '@/types/components/PageProps';
import type { Search } from 'tmdb-ts';
import type { MovieSearchOptions } from 'tmdb-ts/dist/endpoints';

type DiscoverMovieProps = {
  params: ParsedParams;
};

async function DiscoverMovie({ params }: DiscoverMovieProps): Promise<JSX.Element> {
  const options: MovieQueryOptions = {
    primary_release_year: params.year,
    with_genres: params.genres.length === 0 ? undefined : params.genres.map((genre) => genre.id).join(','),
    sort_by: params.sort.value,
  };

  const data: Search<BasicMediaData> | null = await discoverMovie({ ...options, page: 1 });

  if (!data || data.results.length === 0) {
    return <>No tv shows found.</>;
  }

  async function search(page: number): Promise<Search<BasicMediaData> | null> {
    'use server';
    return await discoverMovie({ ...options, page });
  }

  return <Results initialResults={data} layout={params.layout.key} query={search} />;
}

export default async function MovieSearchPage({ searchParams }: PageProps): Promise<JSX.Element> {
  const params = parseParams('/search/movie', searchParams);

  if (!params.query) {
    return <DiscoverMovie params={params} />;
  }

  const options: MovieSearchOptions = { query: params.query, primary_release_year: params.year };
  const data: Search<BasicMediaData> | null = await searchMovie({ ...options, page: 1 });

  async function search(page: number): Promise<Search<BasicMediaData> | null> {
    'use server';
    return await searchMovie({ ...options, page });
  }

  if (!data || data.results.length === 0) {
    return <>No movies found.</>;
  }

  return <Results initialResults={data} layout={params.layout.key} query={search} />;
}
