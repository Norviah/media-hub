import { FilterItem } from './FilterItem';
import { FilterItemDropdown } from './FilterItemDropdown';

import type { FilterItem as FilterItemType, LayoutItem } from '@/components/search/constants';

export type ListItem = FilterItemType | LayoutItem;

function FilterItemList({ list }: { list: ListItem[] }) {
  return (
    <>
      {list.map((item: ListItem, i) => (
        <FilterItem key={i} item={item} />
      ))}
    </>
  );
}

export function FilterList({ list, title }: { list: ListItem[]; title?: string }): JSX.Element {
  return (
    <>
      <nav>
        {title ? <h3 className="hidden text-xs text-neutral-500 dark:text-neutral-400 md:block">{title}</h3> : null}
        <ul className="hidden md:block">
          <FilterItemList list={list} />
        </ul>
        <ul className="md:hidden">
          <FilterItemDropdown list={list} />
        </ul>
      </nav>
    </>
  );
}
