'use client';

import { ChevronDownIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import type { TriggerProps } from '../types';

export function Text<Schema extends Record<string, any>, Key extends keyof Schema>({
  picked,
  renderTrigger,
  classes,
}: TriggerProps<Schema, Key>) {
  const str = Array.isArray(picked) ? picked.join(', ') : picked;

  return (
    <div
      className={cn(
        'flex cursor-pointer flex-row items-center justify-between gap-2 p-0 text-sm transition-colors hover:text-foreground-dark data-[state=open]:text-foreground',
        classes?.text,
      )}
    >
      <p>{str ? (renderTrigger ? renderTrigger(str) : str) : 'N/A'}</p>
      <ChevronDownIcon className='size-4' />
    </div>
  );
}
