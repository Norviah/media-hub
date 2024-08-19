import type { RouteItem } from '@/types';
import { BookIcon, SearchIcon } from 'lucide-react';

export const routes: RouteItem[] = [
  {
    title: 'Search',
    path: '/search',
    icon: SearchIcon,
  },
  {
    title: 'Demo',
    path: '/demo',
    icon: BookIcon,
  },
];
