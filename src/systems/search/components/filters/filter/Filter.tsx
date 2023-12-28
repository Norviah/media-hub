'use client';

import { Button } from '@/components/ui/Button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/Command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';

import { cn } from '@/utils/cn';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { defaultFilter, filters } from '../../../util/constants';
import { constructUrl } from '../../../util/constructUrl';

export function Filter(): JSX.Element {
  const [open, setOpen] = useState(false);

  const params = useSearchParams();
  const router = useRouter();
  const filterParam = params.get('filter');
  const filter = filters.find((item) => item.slug === filterParam) || defaultFilter;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="h-9 w-[200px] justify-between border-none bg-card shadow-lg hover:bg-transparent"
        >
          {filter.title}
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search filter..." className="h-9" />
          <CommandEmpty>No filter found.</CommandEmpty>
          <CommandGroup>
            {filters.map((format) => {
              const active = filter.slug === format.slug;

              return (
                <CommandItem
                  key={format.key}
                  value={format.key}
                  onSelect={(currentValue) => {
                    setOpen(false);

                    const filter = filters.find((item) => item.key === currentValue) || defaultFilter;
                    router.push(constructUrl(params, { filter: filter.slug || undefined }));
                  }}
                >
                  {format.title}
                  <CheckIcon className={cn('ml-auto h-4 w-4', active ? 'opacity-100' : 'opacity-0')} />
                </CommandItem>
              );
            })}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
