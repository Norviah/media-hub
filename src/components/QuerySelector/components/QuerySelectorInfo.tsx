'use client';

import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ChevronDownIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

import type { TriggerProps } from '../types';

function QuerySelectorInfoHelper<Schema extends Record<string, any>, Key extends keyof Schema>({
  multi,
  picked,
  renderTrigger,
}: Omit<TriggerProps<Schema, Key>, 'open'>) {
  const className = 'rounded-sm px-1 font-normal text-muted-foreground-dark';

  if (!picked) {
    return <span className='text-card-foreground-light'>Any</span>;
  }

  if (multi) {
    return picked.length > 0 ? (
      <div className='space-x-1'>
        <Badge variant='muted' className={className}>
          {renderTrigger ? renderTrigger(picked[0]) : picked[0]}
        </Badge>

        {picked.length > 1 && (
          <Badge variant='muted' className={className}>
            +{picked.length - 1}
          </Badge>
        )}
      </div>
    ) : (
      <span className='text-card-foreground-light'>Any</span>
    );
  }

  return (
    <Badge variant='muted' className={className}>
      {renderTrigger ? renderTrigger(picked as string) : picked}
    </Badge>
  );
}

export function QuerySelectorInfo<Schema extends Record<string, any>, Key extends keyof Schema>({
  open,
  ...props
}: TriggerProps<Schema, Key>) {
  return (
    <Button
      variant='outline'
      role='combobox'
      aria-expanded={open}
      className={cn(
        'justify-between bg-card capitalize shadow-sm hover:bg-card active:bg-card',
        props.classes?.button,
      )}
    >
      <QuerySelectorInfoHelper {...props} />

      <ChevronDownIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
    </Button>
  );
}
