import { Header } from '@/components/ui/typography/Header';
import { Genres } from './Genres';
import { Guard } from './Guard';
import { SearchCategory } from './SearchCategory';
import { SearchInput } from './SearchInput';
import { Year } from './Year';

import { cn } from '@/utils/cn';

export function SearchMenu(): JSX.Element {
  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-col justify-end gap-2 ">
        <Header type="h5">Search</Header>

        <div className="flex h-9 flex-row gap-[0px] rounded-l-lg rounded-r-lg bg-card shadow-md">
          <SearchInput />
          <SearchCategory />
        </div>
      </div>

      <Guard pathname="/search">
        <div className="flex flex-col justify-end gap-2">
          <Header type="h5">Year</Header>
          <Year className={cn('h-9 w-[7rem] justify-between bg-card shadow-md hover:bg-transparent focus:ring-0')} />
        </div>
      </Guard>

      <Guard pathname="/search" queries={['query']}>
        <div className="flex flex-col justify-end gap-2">
          <Header type="h5">Genres</Header>
          <Genres className="h-9 min-w-[12rem] justify-between bg-card px-2 shadow-md hover:bg-card active:bg-none" />
        </div>
      </Guard>
    </div>
  );
}
