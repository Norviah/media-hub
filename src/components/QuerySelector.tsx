'use client';

import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/Command';
import { PopoverContent, PopoverTrigger } from '@/components/ui/Popover';
import { ScrollArea } from '@/components/ui/ScrollArea';
import { Popover } from '@radix-ui/react-popover';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';

import { cn, constructUrl } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

import type { ConstrainedRecord } from '@/types';

/**
 * @template Schema The structure of query parameters for a specific route.
 * @template Key The specific key of the query parameter to modify.
 * @template Multi Whether if the component should support multiple values for
 * the query parameter.
 */
export type QuerySelectorProps<
  Schema extends ConstrainedRecord<Schema>,
  Key extends keyof Schema,
  Multi extends boolean,
> = {
  /**
   * The name of the query parameter the selector is for.
   *
   * This property represents the specific query parameter that the selector will
   * modify. When a user selects an option, the value will be assigned to this query
   * parameter when constructing the URL.
   */
  name: Key;

  /**
   * The supported options for the query parameter.
   *
   * This property contains the available options that the user can choose from.
   * The component will render these options as a dropdown list, and selecting one
   * will update the query parameter with the chosen value.
   */
  options: `${NonNullable<Schema[Key]>}`[];

  /**
   * The current value of the query parameter.
   *
   * This property holds the current vaue of the query parameter. Depending on
   * the `multi` property, this will be an array of strings or a single nullish
   * string.
   */
  picked: Multi extends true
    ? `${NonNullable<Schema[Key]>}`[]
    : `${NonNullable<Schema[Key]>}` | null | undefined;

  /**
   * The placeholder text for the search input.
   *
   * This string represents the placeholder text for the search input field in
   * the dropdown, it should be used to give context to the user on what they
   * are searching for.
   */
  searchPlaceholderText?: string;

  /**
   * The text to display when no search results are found.
   */
  searchEmptyText: string;

  /**
   * The current query parameters.
   *
   * Represents the existing query parameters in the URL which will be used when
   * constructing a new URL when the user selects an option.
   */
  params: Schema;

  /**
   * Any query parameters to force reset when a new value is selected.
   *
   * This optional property allows you to specify additional query parameters
   * to reset when a new value is selected from this component.
   */
  forceReset?: (keyof Schema)[];

  /**
   * Indicates if multiple values can be selected.
   *
   * This boolean determines whether if the query parameter supports multiple
   * values, if `true`, the user can select multiple options and the query
   * parameter will be updated with an array of values.
   *
   * If `false`, the user can only select a single value.
   */
  multi: Multi;

  /**
   * Additional classes for customizing the button appearance.
   *
   * This optional property allows the button within the dropdown to be styled
   * with custom CSS classes.
   */
  buttonClassName?: string;

  /**
   * Additional classes for customizing the popover content appearance.
   *
   * This optional property allows the dropdown popover's content to be styled
   * with custom CSS classes.
   */
  popoverContentClassName?: string;

  /**
   * Additional classes for customizing the scroll area appearance.
   */
  scrollAreaClassName?: string;
};

/**
 * A combo box component for selecting and modifying query parameter values in
 * the URL.
 *
 * This component renders a combo box that allows users to select from a list of
 * options and modify a specific query parameter within the URL. When an option
 * is selected, the component will construct a new URL with the selected value
 * and push it to the router.
 *
 * @template Schema The structure of query parameters for a specific route.
 * @template Key The specific key of the query parameter to modify.
 * @template Multi Whether if the component should support multiple values for
 * the query parameter.
 *
 * @example
 *
 * To use this component, you should first have a schema to represent the query
 * parameters for a specific route, where each value should be nullable and not
 * undefined.
 *
 * ```ts
 * const Schema = z.object({
 *   genres: z.array(z.string()).nullish().default(null),
 * });
 * ```
 *
 * With this schema, you can then use this component to create a dropdown for
 * a specific query parameter.
 *
 * `page.tsx`
 *
 * ```tsx
 * const params = Schema.parse(props.searchParams);
 *
 * <QuerySelector
 *   multi
 *   name='genres'
 *   options={[ ... ]}
 *   picked={params.genres}
 *   searchPlaceholderText='Search for genres...'
 *   searchEmptyText='No genres found.'
 *   params={params}
 *   buttonClassName='w-[200px]'
 *   popoverContentClassName='w-[200px]'
 * />
 * ```
 */
export function QuerySelector<
  Schema extends ConstrainedRecord<Schema>,
  Key extends keyof Schema,
  Multi extends boolean,
>(props: QuerySelectorProps<Schema, Key, Multi>) {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  /**
   * Constructs a new URL with the updated query parameter value and pushes it
   * to the router.
   *
   * @param existingValue The value to update the query parameter with.
   * @param active Whether if the value should be added or removed.
   */
  const push = (existingValue: string, active: boolean): void => {
    const value = props.multi
      ? active
        ? [...(props.picked as string[]), existingValue]
        : (props.picked as string[]).filter((picked) => picked !== existingValue)
      : active
        ? existingValue
        : null;

    const overrides = {
      [props.name]: value,
    } as Partial<{ [K in keyof Schema]: Schema[K] }>;

    if (props.forceReset) {
      for (const key of props.forceReset) {
        overrides[key] = undefined;
      }
    }

    const href = constructUrl<Schema>({
      route: pathname,
      params: props.params,
      overrides,
    });

    router.push(href);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className={cn('justify-between bg-foreground/[.026] capitalize', props.buttonClassName)}
        >
          <QuerySelectorInfo picked={props.picked} multi={props.multi} />

          <ChevronsUpDownIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>

      <PopoverContent className={cn('p-0', props.popoverContentClassName)}>
        <Command>
          <CommandInput placeholder={props.searchPlaceholderText} />
          <CommandList>
            <ScrollArea className={cn('h-72', props.scrollAreaClassName)}>
              <CommandEmpty>{props.searchEmptyText}</CommandEmpty>
              <CommandGroup>
                {props.options.map((option) => {
                  const active = props.multi
                    ? (props.picked as string[]).includes(option)
                    : props.picked === option;

                  return (
                    <CommandItem
                      key={option}
                      value={option}
                      className={cn(
                        'justify-between capitalize transition-colors',
                        active
                          ? 'text-foreground'
                          : 'text-foreground-lighter hover:text-foreground',
                      )}
                      onSelect={(value) => {
                        push(value, !active);

                        if (!props.multi) {
                          setOpen(false);
                        }
                      }}
                    >
                      {option}

                      {active && <CheckIcon className={'h-4 w-4'} />}
                    </CommandItem>
                  );
                })}
              </CommandGroup>

              <CommandSeparator />

              <CommandGroup>
                <CommandItem
                  disabled={
                    props.multi
                      ? (props.picked as string[]).length === 0
                      : props.picked === null || props.picked === undefined
                  }
                  onSelect={() => {
                    const href = constructUrl({
                      params: props.params,
                      route: pathname,
                      overrides: {
                        [props.name]: null,
                      } as Partial<{ [K in keyof Schema]: Schema[K] }>,
                    });

                    router.push(href);
                  }}
                  className='justify-center text-center'
                >
                  Clear {props.multi ? 'all' : 'selection'}
                </CommandItem>
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

function QuerySelectorInfo<
  Schema extends ConstrainedRecord<Schema>,
  Key extends keyof Schema,
  Multi extends boolean,
>(props: Pick<QuerySelectorProps<Schema, Key, Multi>, 'picked' | 'multi'>) {
  if (props.multi) {
    const picked = props.picked as string[];

    return picked.length > 0 ? (
      <div className='space-x-1'>
        <Badge variant='muted' className='rounded-sm px-1 font-normal'>
          {picked[0]}
        </Badge>

        {picked.length > 1 && (
          <Badge variant='muted' className='rounded-sm px-1 font-normal'>
            +{picked.length - 1}
          </Badge>
        )}
      </div>
    ) : (
      <span className='text-foreground-muted'>Any</span>
    );
  }

  if (!props.picked) {
    return <span className='text-foreground-muted'>Any</span>;
  }

  return (
    <Badge variant='muted' className='rounded-sm px-1 font-normal'>
      {props.picked}
    </Badge>
  );
}
