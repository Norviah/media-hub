import {
  MediaGrid,
  SearchControls,
  SearchMenu,
  SearchParamsSchema,
  SearchWrapper,
  defaultLayout,
  layouts,
} from '@/systems/search';
import { Suspense } from 'react';

import { endpoints } from '@/systems/tmdb';

import type {
  MultiSearchOptions,
  SearchMovieOptions,
  SearchTVShowOptions,
} from '@/systems/tmdb/endpoints/search';
import type { PageProps } from '@/types';

export default async function SearchPage(props: PageProps): Promise<JSX.Element> {
  const params = SearchParamsSchema.parse(props.searchParams);
  const layout = layouts.find((layout) => layout.slug === params.layout) ?? defaultLayout;

  async function queryPage(page: number) {
    'use server';

    const options: SearchMovieOptions | SearchTVShowOptions | MultiSearchOptions = {
      query: params.q as string,
      page,
    };

    if (params.year && params.type === 'movie') {
      (options as SearchMovieOptions).primary_release_year = params.year;
    }

    if (params.year && params.type === 'tv') {
      (options as SearchTVShowOptions).year = params.year;
    }

    return await endpoints.search[params.type ?? 'multi'](options);
  }

  return (
    <div className='space-y-7'>
      <SearchMenu {...props} params={params} />
      <SearchControls params={params} />

      <Suspense fallback={<MediaGrid layout={layout} skeleton />} key={JSON.stringify(params)}>
        {params.q ? (
          <SearchWrapper layout={layout} queryPage={queryPage} />
        ) : (
          <p>Search for something!</p>
        )}
      </Suspense>
    </div>
  );
}
