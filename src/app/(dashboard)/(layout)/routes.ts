import { Route } from './types/Route';
import { HomeIcon, SearchIcon, InfoIcon, UserIcon, ListIcon } from 'lucide-react';

export const routes: Route[] = [
  {
    path: '/',
    name: 'Home',
    icon: HomeIcon,
    auth: false,
  },
  {
    path: '/search',
    name: 'Search',
    icon: SearchIcon,
    auth: false,
  },
  {
    path: '/collections',
    name: 'Collections',
    icon: ListIcon,
    auth: true,
  },
  {
    path: '/profile',
    name: 'Profile',
    icon: UserIcon,
    auth: true,
  },
  {
    path: '/about',
    name: 'About',
    icon: InfoIcon,
    auth: false,
  },
];
