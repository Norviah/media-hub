'use client';

import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandSeparator,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  ScrollArea,
} from '@/components/ui';
import { Popover } from '@radix-ui/react-popover';
import { Options, Sections } from './components';

import { cn, constructUrl } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import type { QuerySelectorProps } from './types';

export function QuerySelector<Schema extends Record<string, any>, Key extends keyof Schema>({
  name,
  params,
  options,
  sections,
  picked,
  multi,
  forceReset,
  classes,
  searchPlaceholderText,
  searchEmptyText,
  arrow,
  renderTrigger,
  renderOption,
  trigger: Trigger,
}: QuerySelectorProps<Schema, Key>) {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const onScroll = useCallback(() => {
    if (open) {
      setOpen(false);
    }
  }, [open]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  function push(v: string, active: boolean) {
    let value: string | string[] | null;

    if (multi) {
      value = active ? [...picked, v] : picked.filter((picked) => picked !== v);
    } else {
      value = active ? v : null;
    }

    const href = constructUrl<Schema>({
      route: pathname,
      params,
      reset: forceReset,
      overrides: {
        [name]: value,
      } as Partial<Schema>,
    });

    router.push(href);

    if (!multi) {
      setOpen(false);
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div>
          <Trigger
            picked={picked}
            multi={multi}
            renderTrigger={renderTrigger}
            open={open}
            classes={classes}
          />
        </div>
      </PopoverTrigger>

      <PopoverContent className={cn('border-none p-0', classes?.content)}>
        <Command>
          <CommandInput placeholder={searchPlaceholderText} />
          <CommandList>
            <ScrollArea className={cn('h-72 pr-2', classes?.scrollArea)}>
              <CommandEmpty>{searchEmptyText}</CommandEmpty>

              {sections ? (
                // @ts-ignore
                <Sections
                  sections={sections}
                  push={push}
                  renderOption={renderOption}
                  multi={multi}
                  picked={picked}
                />
              ) : (
                <Options
                  options={options}
                  push={push}
                  renderOption={renderOption}
                  multi={multi}
                  picked={picked}
                />
              )}

              <CommandSeparator />

              <CommandGroup>
                <Button
                  variant='ghost'
                  disabled={multi ? picked.length === 0 : picked === null || picked === undefined}
                  onClick={() => {
                    const href = constructUrl({
                      route: pathname,
                      params,
                      overrides: { [name]: null } as Partial<Schema>,
                    });

                    router.push(href);
                  }}
                  className='w-full justify-center rounded-sm text-center text-sm'
                >
                  Clear {multi ? 'all' : 'selection'}
                </Button>
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>

        {arrow && <PopoverArrow className='fill-card' />}
      </PopoverContent>
    </Popover>
  );
}
