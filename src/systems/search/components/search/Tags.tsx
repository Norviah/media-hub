'use client';

import { TagsIcon } from 'lucide-react';
import { QueryBadge, QueryBadgeContainer } from '../ui/QueryBadge';

import { constructUrl } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';

import type { SearchParamsSchema } from '../../lib';
import type { QueryBadgeProps } from '../ui/QueryBadge';
import type { Genre } from '@/systems/tmdb';

export type TagsProps = {
  params: SearchParamsSchema;
  genres: Genre[];
};

export function Tags({ params, genres }: TagsProps): JSX.Element {
  const router = useRouter();
  const pathname = usePathname();

  const tags: QueryBadgeProps<SearchParamsSchema>[] = [];

  if (params.q) {
    tags.push({ title: 'Query', value: params.q, paramKey: 'q' });
  }

  if (params.type) {
    tags.push({ title: 'Type', value: params.type, paramKey: 'type' });
  }

  if (params.year) {
    tags.push({ title: 'Year', value: params.year, paramKey: 'year' });
  }

  if (genres && genres.length > 0) {
    for (const genre of genres) {
      tags.push({ title: 'Genre', value: genre.name, paramKey: 'genres' });
    }
  }

  if (params.layout) {
    tags.push({ title: 'Layout', value: params.layout, paramKey: 'layout' });
  }

  function remove(tag: QueryBadgeProps<SearchParamsSchema>) {
    const paramValue = params[tag.paramKey];
    let overridenValue: typeof paramValue = null;

    if (Array.isArray(paramValue)) {
      overridenValue = paramValue.filter((item) => item !== tag.value);
    }

    const href = constructUrl({
      route: pathname,
      params,
      overrides: { [tag.paramKey]: overridenValue },
    });

    router.push(href);
  }

  return (
    <div className='flex flex-row flex-wrap items-center gap-2'>
      <TagsIcon className='h-5 w-5 text-foreground-lighter' />

      {tags.map((tag) => (
        <QueryBadge
          key={`${tag.paramKey}-${tag.value}`}
          onClick={() => {
            remove(tag);
          }}
          {...tag}
        />
      ))}

      {tags.length > 1 && (
        <QueryBadgeContainer
          onClick={() => {
            router.push(constructUrl({ route: pathname, params, keep: ['type'] }));
          }}
        >
          Clear All
        </QueryBadgeContainer>
      )}
    </div>
  );
}
