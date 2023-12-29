import { LayoutGridIcon, LayoutListIcon } from 'lucide-react';

import type { Path } from '@/types/Path';
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

export interface PathItem {
  title: string;
  path: Path;
}

export const basePath: PathItem = {
  title: 'Discover',
  path: '/search',
};

export const paths: { title: string; path: Path }[] = [
  basePath,
  {
    title: 'Movies',
    path: '/search/movie',
  },
  {
    title: 'TV Shows',
    path: '/search/tv',
  },
];
