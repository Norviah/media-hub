'use client';

import { Button } from '@/components/ui/Button';
import { CommandDialog, CommandEmpty, CommandGroup, CommandItem, CommandList } from '@/components/ui/Command';
import { Skeleton } from '@/components/ui/Skeleton';
import { SearchIcon } from 'lucide-react';

import { useDebounce } from '@/hooks/useDebounce';
import { searchMulti } from '@/systems/search/common';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState, useTransition } from 'react';
import { useInView } from 'react-intersection-observer';

import type { Media } from '@/systems/search/common';

export function SearchCommand(): JSX.Element {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [data, setData] = useState<Media[]>([]);
  const [isPending, startTransition] = useTransition();
  const [hasMore, setHasMore] = useState(false);
  const [isLoadingMore, startLoadingMore] = useTransition();
  const [page, setPage] = useState(1);

  const debouncedQuery = useDebounce(query, 300);
  const { ref, inView, entry } = useInView();

  useEffect(() => {
    if (debouncedQuery.length === 0) {
      setData([]);
      setPage(1);
    }

    if (debouncedQuery.length > 0) {
      startTransition(async () => {
        const searchedData = await searchMulti({ query: debouncedQuery, page: 1 });

        if (!searchedData) {
          return;
        }

        setData(searchedData.results);
        setHasMore(searchedData.total_pages > page);
        setPage(searchedData.page);
      });
    }
  }, [debouncedQuery]);

  useEffect(() => {
    if (inView && hasMore) {
      startLoadingMore(async () => {
        const moreData = await searchMulti({
          query: debouncedQuery,
          page: page + 1,
        });

        if (!moreData) {
          return;
        }

        setData([...data, ...moreData.results]);
        setHasMore(moreData.total_pages > page);
        setPage(moreData.page);
      });
    }
  }, [inView, hasMore, data, entry, debouncedQuery, page]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((isOpen) => !isOpen);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelect = useCallback((callback: () => unknown) => {
    setIsOpen(false);
    callback();
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
    }
  }, [isOpen]);

  return (
    <>
      <Button variant="icon" size="icon" onClick={() => setIsOpen(true)}>
        <SearchIcon className="h-5 w-5" />
        <span className="sr-only">Search</span>
      </Button>

      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
          <SearchIcon className="mr-2 h-5 w-5 text-muted-foreground" />

          <input
            ref={ref}
            className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <CommandList>
          {!isPending && query.length > 0 && (
            <CommandEmpty className={'py-6 text-center text-sm'}>No anime found.</CommandEmpty>
          )}

          {data && (
            <CommandGroup>
              {data?.map((media, index) => (
                <CommandItem
                  key={index}
                  value={String(media.id)}
                  ref={index === data.length - 1 ? ref : undefined}
                  onSelect={() =>
                    handleSelect(() => {
                      startTransition(() => {
                        setQuery('');
                        router.push(media.path);
                      });
                    })
                  }
                >
                  <img src={media.poster} alt={media.name} className="mr-4 h-14 w-10 rounded-sm" />

                  <div className="flex flex-col justify-center">
                    <h3 className="text-sm font-medium leading-none">{media.name}</h3>
                    <p className="text-xs leading-none text-muted-foreground">{media.year}</p>
                  </div>
                </CommandItem>
              ))}
              {isLoadingMore && <LoadingFragment />}
            </CommandGroup>
          )}

          {isPending && (
            <div className="space-y-1 overflow-hidden px-1 py-2">
              <LoadingFragment />
              <LoadingFragment />
            </div>
          )}

          {!debouncedQuery.length && !query && <div className="p-4 text-center text-sm">Enter a query to see results.</div>}
        </CommandList>
      </CommandDialog>
    </>
  );
}

function LoadingFragment() {
  return (
    <div className="flex flex-row">
      <Skeleton className="mr-4 h-16 w-10 rounded-sm" />
      <div className="h-15 flex flex-col justify-center gap-2">
        <Skeleton className="h-3 w-40" />
        <Skeleton className="h-3 w-20" />
      </div>

      <Skeleton className="h-8 rounded-sm" />
    </div>
  );
}
