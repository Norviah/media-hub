'use client';

import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/Command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover';
import { ScrollArea } from '@/components/ui/ScrollArea';
import { Check, ChevronsUpDown } from 'lucide-react';

import { SearchParams } from '@/utils/params';
import { cn } from '@/utils/cn';
import { constructUrl } from '@/systems/search/util/constructUrl';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

import type { Genre } from '@/actions/tmdb';

export function Genres({ genres }: { genres: Genre[] }): JSX.Element {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();
  const genresParams = params.getAll(SearchParams.GENRES);

  const addGenre = (genre: string) => {
    const href = constructUrl({
      path: pathname,
      params,
      overrides: {
        [SearchParams.GENRES]: [...genresParams, genre],
      },
    });

    router.push(href);
  };

  const removeGenre = (genre: string) => {
    const href = constructUrl({
      path: pathname,
      params,
      overrides: {
        [SearchParams.GENRES]: genresParams.filter((genreParam) => genreParam !== genre),
      },
    });

    router.push(href);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="h-9 w-[12rem] justify-between border-none bg-card px-2 shadow-lg hover:bg-card active:bg-none"
        >
          {genresParams.length > 0 ? (
            <div className="flex flex-row gap-1">
              <Badge className="text-sm">{genresParams[0]}</Badge>
              {genresParams.length > 1 && <Badge className="text-sm">+{genresParams.length - 1}</Badge>}
            </div>
          ) : (
            <span className="opacity-50">Genres</span>
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[12rem] p-0">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            <ScrollArea className="h-72">
              {genres.map((genre) => (
                <CommandItem
                  key={genre.id}
                  value={genre.name}
                  onSelect={(currentValue) => {
                    if (genresParams.includes(currentValue.toLowerCase())) {
                      removeGenre(currentValue.toLowerCase());
                    } else {
                      addGenre(currentValue);
                    }
                  }}
                >
                  <div className="flex w-full flex-row justify-between">
                    {genre.name}
                    <Check
                      className={cn(
                        'h-4 w-4',
                        genresParams.includes(genre.name.toLowerCase()) ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                  </div>
                </CommandItem>
              ))}
            </ScrollArea>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
