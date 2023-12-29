import { Header } from '@/components/ui/typography/Header';
import { Filter } from './Filter';
import { SearchInput } from './SearchInput';
import { Settings } from './Settings';
import { Tags } from './Tags';
import { Year } from './Year';
import { Layout } from './layout/Layout';

type Props = {
  query: string | undefined;
};

export function SearchForm(props: Props): JSX.Element {
  return (
    <div className="mb-7 flex flex-col gap-7">
      <div className="flex justify-between gap-3">
        <div className="flex flex-row gap-5">
          <div className="flex flex-col justify-end gap-2">
            <Header type="h5">Search</Header>
            <SearchInput query={props.query} />
          </div>

          <div className="flex flex-col justify-end gap-2">
            <Header type="h5">Filter</Header>
            <Filter />
          </div>

          <div className="flex flex-col justify-end gap-2">
            <Header type="h5">Year</Header>
            <Year />
          </div>

          {/* <div className="flex flex-col justify-end gap-2">
            <Header type="h5">Genres</Header>
            <Suspense fallback={<GenresSkeleton />}>
              <GenresContainer />
            </Suspense>
          </div> */}
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
