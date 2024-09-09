import { LayoutGridIcon, LayoutListIcon } from 'lucide-react';
import type { LayoutItem } from '../types';

export const defaultLayout: LayoutItem = {
  slug: null,
  key: 'grid',
  title: 'Grid',
};

export const layouts: LayoutItem[] = [
  defaultLayout,
  {
    slug: 'list',
    key: 'list',
    title: 'List',
  },
] as const;

export const icons = {
  grid: LayoutGridIcon,
  list: LayoutListIcon,
};
