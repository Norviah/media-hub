'use client';

import { Badge } from '@/components/ui';
import { XIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

import type { BadgeProps } from '@/components/ui';
import type { ConstrainedRecord, Primitive } from '@/types';
import type { LucideIcon } from 'lucide-react';

export type QueryBadgeContainerProps = BadgeProps;

export function QueryBadgeContainer({
  children,
  className,
  ...props
}: QueryBadgeContainerProps): JSX.Element {
  return (
    <Badge
      variant='muted'
      className={cn('group h-7 cursor-pointer border border-border capitalize', className)}
      {...props}
    >
      {children}
    </Badge>
  );
}

export type QueryBadgeProps<T extends ConstrainedRecord<T>> = {
  paramKey: keyof T;
  icon?: LucideIcon | null;
  value: Primitive;
  title?: string;
};

export function QueryBadge<T extends ConstrainedRecord<T>>({
  title,
  icon,
  value,
  paramKey,
  ...props
}: QueryBadgeProps<T> & BadgeProps): JSX.Element | null {
  return (
    <QueryBadgeContainer {...props}>
      <p className='space-x-2'>
        {title && <span className='text-muted-foreground'>{title}:</span>}
        <span className='text-muted-foreground-dark'>{value}</span>
      </p>

      <XIcon className='ml-2 h-4 w-4 transition-colors group-hover:text-muted-foreground-dark' />
    </QueryBadgeContainer>
  );
}
