'use client';

import Link from 'next/link';

import { cn } from '@/utils/cn';
import { SearchParams } from '@/utils/params';
import { usePathname, useSearchParams } from 'next/navigation';
import { constructUrl } from '../../../util/constructUrl';

import type { LayoutItem } from '../../../util/constants';

export function LayoutItem({ item }: { item: LayoutItem }): JSX.Element {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const layout = searchParams.get(SearchParams.LAYOUT);
  const active = layout === item.slug;

  const href = constructUrl({
    path: pathname,
    params: searchParams,
    overrides: {
      [SearchParams.LAYOUT]: item.slug ?? undefined,
    },
  });

  const DynamicTag = active ? 'p' : Link;

  return (
    <DynamicTag href={href}>
      <item.icon
        className={cn(
          'h-5 w-5 cursor-pointer transition-colors',
          active
            ? 'fill-foreground text-foreground'
            : 'fill-muted-foreground text-muted-foreground hover:fill-foreground hover:text-foreground'
        )}
      />
    </DynamicTag>
  );
}
