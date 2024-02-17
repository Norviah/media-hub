import { SearchContainer } from '@/systems/search/results';

import { discoverMovie, parseParams, searchMovie } from '@/systems/search/common';

import type { PageProps } from '@/types/components/PageProps';
import type { SortOption } from 'tmdb-ts';

export default async function MovieSearchPage({ searchParams }: PageProps): Promise<JSX.Element> {
  const params = parseParams('/search/movie', searchParams);

  const options = params.query
    ? ({
        options: { query: params.query, primary_release_year: params.year },
        action: searchMovie,
      } as const)
    : ({
        options: {
          primary_release_year: params.year,
          sort_by: params.sort.value as SortOption,
          with_genres: params.genres.length > 0 ? params.genres.map((genre) => genre.id).join(',') : '',
        },
        action: discoverMovie,
      } as const);

  return <SearchContainer params={params} NoMediaFound={<p>No movies found.</p>} {...options} />;
}
