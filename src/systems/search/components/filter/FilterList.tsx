import { FilterItem } from './FilterItem';
import { FilterItemDropdown } from './FilterItemDropdown';

import type { FilterItem as FilterItemType, LayoutItem } from '@/systems/search/util/constants';

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
        {title ? <h3 className="hidden text-sm text-foreground/50 md:block">{title}</h3> : null}
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
