'use client';

import { TagsIcon } from 'lucide-react';
import { DynamicBadge } from './DynamicBadge';

import { useRouter, useSearchParams } from 'next/navigation';
import { defaultFilter, filters } from '../../util/constants';
import { constructUrl } from '../../util/constructUrl';

export function Tags(): JSX.Element {
  const router = useRouter();
  const params = useSearchParams();

  const query = params.get('q');
  const filterParam = params.get('filter');
  const filter = filters.find((filter) => filter.slug === filterParam) || defaultFilter;

  const tags: { onClick: () => void; text: JSX.Element }[] = [];

  if (query) {
    tags.push({
      onClick: () => {
        router.push(constructUrl(params, { q: undefined }));
      },
      text: (
        <>
          <span className="text-muted-foreground">Query:</span>
          &nbsp; {query}
        </>
      ),
    });
  }

  if (filterParam) {
    tags.push({
      onClick: () => {
        router.push(constructUrl(params, { filter: undefined }));
      },
      text: (
        <>
          <span className="text-muted-foreground">Filter:</span>
          &nbsp; {filter.title}
        </>
      ),
    });
  }

  return (
    <div className="flex flex-row gap-3">
      <TagsIcon className="h-6 w-6 text-muted-foreground" />
      {tags.map((tag, index) => (
        <DynamicBadge key={index} variant="default" onClick={tag.onClick}>
          {tag.text}
        </DynamicBadge>
      ))}
    </div>
  );
}
