'use client';

import { CommandGroup, CommandItem } from '@/components/ui';
import { CheckIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

import type { With } from '@/types';
import type { QuerySelectorProps } from '../types';

export type OptionsProps<Schema extends Record<string, any>, Key extends keyof Schema> = With<
  Pick<QuerySelectorProps<Schema, Key>, 'options' | 'renderOption' | 'multi' | 'picked'> & {
    push: (value: string, active: boolean) => void;
  },
  'options'
>;

export function Options<Schema extends Record<string, any>, Key extends keyof Schema>({
  options,
  renderOption,
  push,
  multi,
  picked,
}: OptionsProps<Schema, Key>) {
  return (
    <CommandGroup>
      {options.map((option) => {
        const active = multi ? (picked as string[]).includes(option) : picked === option;

        return (
          <CommandItem
            key={option}
            value={option}
            className={cn(
              'justify-between capitalize transition-colors',
              active ? 'text-foreground-dark' : 'text-foreground hover:text-foreground',
            )}
            onSelect={(value) => {
              push(value, !active);
            }}
          >
            {renderOption ? renderOption(option) : option}

            {active && <CheckIcon className={'h-4 w-4'} />}
          </CommandItem>
        );
      })}
    </CommandGroup>
  );
}
