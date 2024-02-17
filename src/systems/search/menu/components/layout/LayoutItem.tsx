'use client';

import Link from 'next/link';

import { cn } from '@/utils/cn';
import { SearchParams } from '@/utils/params';
import { usePathname, useSearchParams } from 'next/navigation';
import { constructUrl, parseParams } from '../../../common/utils';

import type { LayoutItem } from '../../../common/utils';

export function LayoutItem({ item }: { item: LayoutItem }): JSX.Element {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const parsedQueries = parseParams(pathname, searchParams);

  const active = parsedQueries.layout.slug === item.slug;

  const href = constructUrl({
    path: pathname,
    params: searchParams,
    overrides: {
      [SearchParams.LAYOUT]: item.slug ?? undefined,
    },
  });

  return (
    <Link href={href} className={active ? 'pointer-events-none' : undefined}>
      <item.icon
        className={cn(
          'h-5 w-5 cursor-pointer transition-colors',
          active ? 'fill-muted-foreground text-muted-foreground' : 'text-muted-foreground/50 hover:text-muted-foreground'
        )}
      />
    </Link>
  );
}
