'use client';

import { TagsIcon } from 'lucide-react';
import { SearchContext } from '../lib/context';
import { QueryBadge, QueryBadgeContainer } from './ui';

import { constructUrl } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import { useContext } from 'react';

import type { SearchParamsSchema } from '../lib';
import type { QueryBadgeProps } from './ui';

export function Tags(): JSX.Element {
  const { params, pickedGenres } = useContext(SearchContext);

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

  if (pickedGenres && pickedGenres.length > 0) {
    for (const genre of pickedGenres) {
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
            router.push(constructUrl({ route: pathname, params, keep: ['type', 'layout'] }));
          }}
        >
          Clear All
        </QueryBadgeContainer>
      )}
    </div>
  );
}
