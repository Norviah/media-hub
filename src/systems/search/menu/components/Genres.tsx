'use client';

import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/Command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover';
import { ScrollArea } from '@/components/ui/ScrollArea';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/utils/cn';
import { SearchParams } from '@/utils/params';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { constructUrl, movieGenres, parseParams, tvGenres } from '../../common/utils';

type GenresProps = {
  className?: string;
};

export function Genres({ className }: GenresProps): JSX.Element {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();
  const genresList = pathname === '/search/tv' ? tvGenres : movieGenres;

  const { genres } = parseParams(pathname, params);

  const addGenre = (genre: number) => {
    const names = genres.map((genreParam) => genreParam.name);

    const obj = genresList.find((genreObj) => genreObj.id === genre);

    if (!obj) {
      return null;
    }

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
    const newGenres: string[] = [];

    for (const genreParam of genres) {
      if (genreParam.id !== genre) {
        newGenres.push(genreParam.name);
      }
    }

    const href = constructUrl({
      path: pathname,
      params,
      overrides: {
        [SearchParams.GENRES]: newGenres,
      },
    });

    router.push(href);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className={className}>
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
          <CommandEmpty>No genres found.</CommandEmpty>
          <CommandGroup>
            <ScrollArea className="h-72">
              {genresList.map((genre) => {
                const active = genres.some((item) => item.id === Number(genre.id));

                return (
                  <CommandItem
                    key={genre.id}
                    value={genre.name}
                    onSelect={(currentValue) => {
                      const genre = genresList.find((genre) => genre.name.toLowerCase() === currentValue.toLowerCase());

                      if (!genre) {
                        return;
                      }

                      const id: number = Number(genre.id);

                      if (active) {
                        removeGenre(id);
                      } else {
                        addGenre(id);
                      }
                    }}
                    className={cn('text-muted-foreground hover:text-foreground', active && 'text-foreground')}
                  >
                    <div className={cn('flex w-full flex-row justify-between')}>
                      {genre.name}

                      {active && <Check className={cn('h-4 w-4')} />}
                    </div>
                  </CommandItem>
                );
              })}
            </ScrollArea>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
