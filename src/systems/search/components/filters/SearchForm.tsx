import { Settings } from './Settings';
import { FilterContainer } from './filter/FilterContainer';
import { Layout } from './layout/Layout';
import { SearchContainer } from './search/SearchContainer';
import { Tags } from './Tags';

type Props = {
  query: string | undefined;
};

export function SearchForm(props: Props): JSX.Element {
  return (
    <div className="mb-7 flex flex-col gap-7">
      <div className="flex justify-between gap-3">
        <div className="flex flex-row gap-5">
          <SearchContainer className="flex flex-col justify-end gap-2" query={props.query} />
          <FilterContainer className="flex flex-col justify-end gap-2" />
        </div>

        <div className="flex flex-col items-end justify-end gap-2">
          <Settings />
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <Tags />
        <div className="flex flex-row gap-2">
          <Layout />
        </div>
      </div>
    </div>
  );
}
