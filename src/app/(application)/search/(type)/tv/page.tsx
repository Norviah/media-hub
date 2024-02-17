import { SearchContainer } from '@/systems/search/results';

import { discoverTv, parseParams, searchTv } from '@/systems/search/common';

import type { PageProps } from '@/types/components/PageProps';
import type { SortOption } from 'tmdb-ts';

export default async function TvSearchPage({ searchParams }: PageProps): Promise<JSX.Element> {
  const params = parseParams('/search/tv', searchParams);

  const options = params.query
    ? ({
        options: { query: params.query, first_air_date_year: params.year },
        action: searchTv,
      } as const)
    : ({
        options: {
          first_air_date_year: params.year,
          sort_by: params.sort.value as SortOption,
          with_genres: params.genres.length > 0 ? params.genres.map((genre) => genre.id).join(',') : '',
        },
        action: discoverTv,
      } as const);

  return <SearchContainer params={params} NoMediaFound={<p>No tv shows found.</p>} {...options} />;
}
