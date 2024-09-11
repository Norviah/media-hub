import { BookIcon, SearchIcon } from 'lucide-react';

import type { RouteItem } from '@/types';
import type { Route } from 'next';

export const routes: RouteItem[] = [
  {
    title: 'Search',
    path: '/search',
    icon: SearchIcon,
  },
  {
    title: 'Discover',
    path: '/discover',
    icon: BookIcon,
  },
  {
    title: 'Documentation',
    path: '/docs' as Route,
    icon: BookIcon,
  },
  {
    title: 'Demo',
    path: '/demo',
    icon: BookIcon,
  },
];
