'use client';

import { Input } from '@/components/ui/Input';
import { SearchIcon, XIcon } from 'lucide-react';

import { useDebounce } from '@/hooks/useDebounce';
import { SearchParams } from '@/utils/params';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useParsedQuery } from '../../common/hooks';
import { constructUrl } from '../../common/utils';

export function SearchInput(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 400);
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();

  const { query } = useParsedQuery();

  useEffect(() => {
    if (debouncedSearchTerm?.length > 0) {
      router.push(
        constructUrl({
          path: pathname,
          params,
          overrides: {
            [SearchParams.QUERY]: debouncedSearchTerm,
            [SearchParams.GENRES]: undefined,
            [SearchParams.SORT]: undefined,
            [SearchParams.YEAR]: undefined,
          },
        })
      );
    }
  }, [debouncedSearchTerm]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(
      constructUrl({
        path: pathname,
        params,
        overrides: { [SearchParams.QUERY]: debouncedSearchTerm },
      })
    );
  };

  return (
    <div className="relative h-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
        <SearchIcon className="h-4 w-4" />
      </div>

      <form onSubmit={onSubmit} className="h-full">
        <Input
          type="search"
          className="h-full rounded-r-none border-r-[1px] bg-card pl-10"
          placeholder={query ?? 'Search for something!'}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      {(searchTerm.length > 0 || query !== undefined) && (
        <div
          className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-muted-foreground transition-colors hover:text-foreground"
          onClick={() => {
            setSearchTerm('');
            router.push(
              constructUrl({
                path: pathname,
                params,
                overrides: {
                  [SearchParams.QUERY]: undefined,
                  [SearchParams.GENRES]: undefined,
                  [SearchParams.SORT]: undefined,
                },
              })
            );
          }}
        >
          <XIcon className="h-4 w-4" />
        </div>
      )}
    </div>
  );
}
