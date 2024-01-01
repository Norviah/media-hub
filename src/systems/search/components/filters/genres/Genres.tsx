'use client';

import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/Command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover';
import { ScrollArea } from '@/components/ui/ScrollArea';
import { Check, ChevronsUpDown } from 'lucide-react';

import { constructUrl } from '@/systems/search/util/constructUrl';
import { parseParams } from '@/systems/search/util/parseParams';
import { cn } from '@/utils/cn';
import { SearchParams } from '@/utils/params';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

import type { Genre } from 'tmdb-ts';

export function Genres({ genresList }: { genresList: Genre[] }): JSX.Element {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();

  const { genres } = parseParams(pathname, params);

  const addGenre = (genre: number) => {
    const names = genres.map((genreParam) => genreParam.name);
    const obj = genresList.find((genreObj) => genreObj.id === genre)!;

    const href = constructUrl({
      path: pathname,
      params,
      overrides: {
        [SearchParams.GENRES]: [...names, obj.name],
      },
    });

    router.push(href);
  };

  const removeGenre = (genre: number) => {
    const href = constructUrl({
      path: pathname,
      params,
      overrides: {
        [SearchParams.GENRES]: genres.filter((genreParam) => genreParam.id !== genre).map((genreParam) => genreParam.name),
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
          {genres.length > 0 ? (
            <div className="flex flex-row gap-1">
              <Badge className="text-sm">{genres[0].name}</Badge>
              {genres.length > 1 && <Badge className="text-sm">+{genres.length - 1}</Badge>}
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
              {genresList.map((genre) => (
                <CommandItem
                  key={genre.id}
                  value={String(genre.id)}
                  onSelect={(currentValue) => {
                    const id: number = Number(currentValue);

                    if (genres.some((genre) => genre.id === id)) {
                      removeGenre(id);
                    } else {
                      addGenre(id);
                    }
                  }}
                >
                  <div className="flex w-full flex-row justify-between">
                    {genre.name}
                    <Check
                      className={cn(
                        'h-4 w-4',
                        genres.some((item) => item.id === Number(genre.id)) ? 'opacity-100' : 'opacity-0'
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
