'use client';

import { CommandGroup, CommandItem } from '@/components/ui/Command';
import { CheckIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

import type { QuerySelectorPickedProps } from '../types';

export type SectionsProps<Schema extends Record<string, any>, Key extends keyof Schema> = {
  sections: { title: string; options: `${NonNullable<Schema[Key]>}`[] }[];
  push: (value: string, active: boolean) => void;
  renderOption?: (string: string) => string;
} & QuerySelectorPickedProps<Schema, Key>;

export function Sections<Schema extends Record<string, any>, Key extends keyof Schema>({
  sections,
  renderOption,
  push,
  multi,
  picked,
}: SectionsProps<Schema, Key>) {
  return (
    <div className='flex flex-col gap-2'>
      {sections.map((section) => (
        <CommandGroup key={section.title} title={section.title}>
          <div className='flex flex-col gap-2'>
            <p className='pl-2 text-foreground-light text-sm'>{section.title}</p>

            <div className='flex flex-col gap-0'>
              {section.options.map((option) => {
                const active = multi ? picked.includes(option) : picked === option;

                return (
                  <CommandItem
                    key={option}
                    value={option}
                    onSelect={(value) => {
                      push(value, !active);
                    }}
                    className={cn(
                      'flex flex-row justify-between transition-colors delay-0',
                      active && 'text-card-foreground-dark',
                    )}
                  >
                    {renderOption ? renderOption(option) : option}

                    {active && <CheckIcon className='h-4 w-4' />}
                  </CommandItem>
                );
              })}
            </div>
          </div>
        </CommandGroup>
      ))}
    </div>
  );
}
