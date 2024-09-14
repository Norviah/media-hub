'use client';

import { SearchIcon, XIcon } from 'lucide-react';
import { Input } from './ui/Input';

import { useDebounce } from '@/hooks';
import { cn, constructUrl } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import type { ConstrainedRecord } from '@/types';
import type { Route } from 'next';

/**
 * @template Schema The structure of query parameters for a specific route.
 * @template Key The specific key of the query parameter to modify.
 */
export type SearchQueryProps<Schema extends ConstrainedRecord<Schema>, Key extends keyof Schema> = {
  /**
   * The name of the query parameter the selector is for.
   *
   * This property specifies the key of the query parameter in the schema that
   * the search input will modify. When the user enters a term, the value will
   * be assigned to this query parameter when constructing the URL.
   */
  name: Key;

  /**
   * The placeholder text for the search input.
   *
   * This string represents the placeholder text for the search input field in
   * the dropdown, it should be used to give context to the user on what they
   * are searching for.
   */
  placeholderText: string;

  /**
   * The current query parameters.
   *
   * Represents the existing query parameters in the URL which will be used when
   * constructing a new URL when the user selects an option.
   */
  params: Schema;

  /**
   * The class name for the search input.
   *
   * This property is used to apply custom styles to the search input field.
   */
  className?: string;
};

/**
 * An input component for modifying a specific query parameter.
 *
 * The component provides an input field that allows users to enter a search
 * term, which will update the specified query parameter with the entered value.
 *
 * @template Schema The structure of query parameters for a specific route.
 * @template Key The specific key of the query parameter to modify.
 *
 * @example
 *
 * `page.tsx`
 *
 * ```tsx
 * import { z } from 'zod';
 *
 * import type { PageProps } from '@/types';
 *
 * const Schema = z.object({
 *   q: z.string().nullish().default(null),
 * });
 *
 * export default function Page({ searchParams }: PageProps): JSX.Element {
 *   const params = Schema.parse(searchParams);
 *
 *   return (
 *     <SearchQuery
 *       name="q"
 *       params={params}
 *       placeholderText="Search for a query..."
 *     />
 *   )
 * };
 * ```
 *
 * This represents a basic usage for the component, here we define a schema
 * for the query parameters and use this component to have a search input
 * field that updates the query parameter `q` in the URL.
 */
export function SearchQuery<Schema extends ConstrainedRecord<Schema>, Key extends keyof Schema>({
  name,
  params,
  placeholderText,
  className,
}: SearchQueryProps<Schema, Key>): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 400);
  const router = useRouter();
  const pathname = usePathname();

  const value = params[name];

  const construct = (query: string | null): Route => {
    const url = constructUrl<Schema>({
      route: pathname,
      params: params,
      overrides: {
        [name]: query,
      } as Partial<Schema>,
    });

    return url;
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: Only depend on the term.
  useEffect(() => {
    if (debouncedSearchTerm.length > 0) {
      router.push(construct(debouncedSearchTerm || null));
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (value === undefined || value === null) {
      setSearchTerm('');
    }
  }, [value]);

  return (
    <div className='relative'>
      <div className='absolute inset-y-0 left-0 flex items-center pl-3 text-foreground-muted'>
        <SearchIcon className='h-4 w-4' />
      </div>

      <Input
        className={cn('pl-10', className)}
        placeholder={value ? String(value) : placeholderText}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {(searchTerm.length > 0 || (value !== undefined && value !== null)) && (
        <div
          className='absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-foreground-muted transition-colors hover:text-foreground'
          onClick={() => {
            router.push(construct(null));
            setSearchTerm('');
          }}
          onKeyUp={() => {
            router.push(construct(null));
            setSearchTerm('');
          }}
        >
          <XIcon className='h-4 w-4' />
        </div>
      )}
    </div>
  );
}
