'use client';

import Link from 'next/link';

import { cn } from '@/utils/cn';
import { usePathname, useSearchParams } from 'next/navigation';
import { createUrl } from '../createUrl';

import type { Route } from '@/types/Route';
import type { ListItem } from './FilterList';

export function FilterItem({ item }: { item: ListItem }): JSX.Element {
  const type = item.type === 'FILTER' ? 'filter' : 'sort';

  const pathname = usePathname() as Route['path'];
  const searchParams = useSearchParams();

  const active = searchParams.get(type) === item.slug;
  const q = searchParams.get('q');
  const sort = searchParams.get('sort');
  const filter = searchParams.get('filter');

  const href = createUrl(
    pathname,
    new URLSearchParams({
      ...(q && { q }),
      ...(filter && type !== 'filter' && { filter }),
      ...(sort && type !== 'sort' && { sort }),
      ...(item.slug && item.slug.length && { [type]: item.key }),
    })
  );

  const DynamicTag = active ? 'p' : Link;

  return (
    <li className="mt-2 flex text-sm" key={item.title}>
      <DynamicTag
        prefetch={!active ? false : undefined}
        href={href}
        className={cn('w-full hover:underline hover:underline-offset-4', {
          'underline underline-offset-4': active,
        })}
      >
        {item.title}
      </DynamicTag>
    </li>
  );
}
