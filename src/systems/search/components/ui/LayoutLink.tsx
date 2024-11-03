'use client';

import Link from 'next/link';

import { cn, constructUrl } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { icons } from '../../lib';

import type { LayoutItem, SearchParamsSchema } from '../../lib';

export type LayoutItemProps = {
  item: LayoutItem;
  params: SearchParamsSchema;
};

export function LayoutLink({ item, params }: LayoutItemProps): JSX.Element {
  const pathname = usePathname();

  const Icon = icons[item.key];

  return (
    <Link href={constructUrl({ route: pathname, params, overrides: { layout: item.slug } })}>
      <Icon
        className={cn(
          'h-5 w-5 transition-colors',
          item.slug === params.layout && 'fill-foreground-light',
        )}
      />
    </Link>
  );
}
