'use client';

import { Badge } from '@/components/ui/Badge';
import { XIcon } from 'lucide-react';

import { cn } from '@/utils/cn';

import type { BadgeProps } from '@/components/ui/Badge';

export function DynamicBadge({ children, className, ...props }: BadgeProps & { onClick: () => void }): JSX.Element {
  return (
    <Badge
      {...props}
      className={cn('h-6 cursor-pointer text-muted-foreground transition-colors hover:text-foreground', className)}
    >
      <span className="text-foreground">{children}</span>
      <XIcon className="ml-2 h-4 w-4" />
    </Badge>
  );
}
