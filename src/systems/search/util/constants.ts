// import type { Media } from '@/types/Media';

// export interface FilterItem {
//   title: string;
//   slug: Media['type'] | null;
//   type: 'FILTER';
//   key: Media['type'];
// }

// export const defaultFilter: FilterItem = {
//   title: 'TV Shows',
//   slug: null,
//   type: 'FILTER',
//   key: 'tv',
// };

// export const filters: FilterItem[] = [
//   defaultFilter,
//   {
//     title: 'Movies',
//     slug: 'movie',
//     type: 'FILTER',
//     key: 'movie',
//   },
// ];

// export interface LayoutItem {
//   title: string;
//   slug: 'grid' | 'list' | null;
//   type: 'VIEWABLE';
//   key: 'grid' | 'list';
// }

// export const defaultLayout: LayoutItem = {
//   title: 'Grid',
//   slug: null,
//   type: 'VIEWABLE',
//   key: 'grid',
// };

// export const layouts: LayoutItem[] = [
//   defaultLayout,
//   {
//     title: 'List',
//     slug: 'list',
//     type: 'VIEWABLE',
//     key: 'list',
//   },
// ];

import { LayoutGridIcon, LayoutListIcon } from 'lucide-react';

import type { Media } from '@/types/Media';
import type { LucideIcon } from 'lucide-react';

export interface LayoutItem {
  icon: LucideIcon;
  slug: string | null;
  key: 'list' | 'grid';
}

export const defaultLayout: LayoutItem = {
  icon: LayoutGridIcon,
  slug: null,
  key: 'grid',
};

export const layouts: LayoutItem[] = [
  defaultLayout,
  {
    icon: LayoutListIcon,
    slug: 'list',
    key: 'list',
  },
];

export interface FilterItem {
  title: string;
  slug: 'movie' | null;
  type: 'FILTER';
  key: Media['type'];
}

export const defaultFilter: FilterItem = {
  title: 'TV Shows',
  slug: null,
  type: 'FILTER',
  key: 'tv',
};

export const filters: FilterItem[] = [
  defaultFilter,
  {
    title: 'Movies',
    slug: 'movie',
    type: 'FILTER',
    key: 'movie',
  },
];
