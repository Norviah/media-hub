import { FilterList } from '@/systems/search/components/filter/FilterList';
import { filters, layouts } from '@/systems/search/util/constants';

export default function SearchLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="relative mx-auto flex max-w-screen-2xl flex-col gap-8 pb-4 md:flex-row">
      <div className="order-last min-h-screen w-full md:order-none">{children}</div>
      <div className="order-none flex flex-col gap-6 md:order-last md:w-[125px]" style={{ position: 'sticky', top: 0 }}>
        <FilterList list={filters} title="Search for" />
        <FilterList list={layouts} title="View by" />
      </div>
    </div>
  );
}
