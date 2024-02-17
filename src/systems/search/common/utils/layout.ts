import { LayoutGridIcon, LayoutListIcon } from 'lucide-react';

import type { LucideIcon } from 'lucide-react';

export interface LayoutItem {
  icon: LucideIcon;
  slug: string | null;
  key: 'list' | 'grid';
  title: string;
}

export const defaultLayout: LayoutItem = {
  icon: LayoutGridIcon,
  slug: null,
  key: 'grid',
  title: 'Grid',
};

export const layouts: LayoutItem[] = [
  defaultLayout,
  {
    icon: LayoutListIcon,
    slug: 'list',
    key: 'list',
    title: 'List',
  },
];
