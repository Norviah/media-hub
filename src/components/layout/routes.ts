import { BookIcon, SearchIcon } from 'lucide-react';
import type { RouteItem } from '@/types';

export const routes: RouteItem<`/docs/${string}`>[] = [
  {
    title: 'Search',
    path: '/search',
    icon: SearchIcon,
  },
  {
    title: 'Documentation',
    path: '/docs/',
    icon: BookIcon,
  },
  {
    title: 'Demo',
    path: '/demo',
    icon: BookIcon,
  },
];
