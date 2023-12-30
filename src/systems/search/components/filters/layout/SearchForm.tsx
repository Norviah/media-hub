import { Header } from '@/components/ui/typography/Header';
import { Filter } from '../Filter';
import { SearchInput } from '../SearchInput';
import { MetaInformation } from './MetaInformation';
import { SearchOptions } from './SearchOptions';

export function SearchForm(): JSX.Element {
  return (
    <div className="mb-7 flex flex-col gap-7">
      <div className="flex justify-between gap-3">
        <div className="flex flex-row gap-5">
          <div className="flex flex-col justify-end gap-2">
            <Header type="h5">Search</Header>
            <SearchInput />
          </div>

          <div className="flex flex-col justify-end gap-2">
            <Header type="h5">Filter</Header>
            <Filter />
          </div>

          <SearchOptions />
        </div>
      </div>
      <MetaInformation />
    </div>
  );
}
