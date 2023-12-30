'use client';

import { Input } from '@/components/ui/Input';
import { SearchIcon, XIcon } from 'lucide-react';

import { SearchParams } from '@/utils/params';
import { useDebounce } from '@/hooks/useDebounce';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { constructUrl } from '../../util/constructUrl';
import { basePath } from '../../util/constants';

export function SearchInput(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 400);
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();

  const query = params.get(SearchParams.GENRES) ?? undefined;

  useEffect(() => {
    if (debouncedSearchTerm?.length > 0) {
      router.push(
        constructUrl({
          path: basePath.path === pathname ? '/search/tv' : pathname,
          params,
          overrides: { [SearchParams.QUERY]: debouncedSearchTerm },
        })
      );
    }
  }, [debouncedSearchTerm]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(constructUrl({ path: pathname, params, overrides: { [SearchParams.QUERY]: debouncedSearchTerm } }));
  };

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <SearchIcon className="h-4 w-4 text-muted-foreground" />
      </div>
      <form onSubmit={onSubmit}>
        <Input
          type="search"
          className="h-9 border-none bg-card pl-10 shadow-lg"
          id="query"
          placeholder={query}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      {query && query.length > 0 && (
        <div
          className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-muted-foreground transition-colors hover:text-foreground"
          onClick={() => {
            router.push(constructUrl({ path: pathname, params, overrides: { [SearchParams.QUERY]: undefined } }));
          }}
        >
          <XIcon className="h-4 w-4" />
        </div>
      )}
    </div>
  );
}
