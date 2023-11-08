import { SearchIcon } from 'lucide-react';
import type { Route } from '@/types/Route';

export const nav: Route[] = [
  {
    title: 'Discover',
    path: '/search',
    icon: SearchIcon,
  },
];
