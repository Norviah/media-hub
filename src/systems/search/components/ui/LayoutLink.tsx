'use client';

import Link from 'next/link';

import { cn, constructUrl } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { icons } from '../../lib';

import type { SearchParamsSchema } from '../../lib';
import type { LayoutItemKeys, LayoutItem as LayoutItemType } from '../../types';

export type LayoutItemProps = {
  item: LayoutItemType;
  params: SearchParamsSchema;
};

export function LayoutLink({ item, params }: LayoutItemProps): JSX.Element {
  const pathname = usePathname();

  const Icon = icons[item.key as LayoutItemKeys];

  return (
    <Link href={constructUrl({ route: pathname, params, overrides: { layout: item.slug } })}>
      <Icon
        className={cn(
          'h-5 w-5 transition-colors',
          item.slug === params.layout
            ? 'fill-foreground-lighter text-foreground-lighter'
            : 'text-foreground-muted',
        )}
      />
    </Link>
  );
}
