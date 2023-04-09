import ListIcon from '@mui/icons-material/FormatListBulleted';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ProfileIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';

import type { Route } from '@/types/Route';

export const routes: Route[] = [
  {
    path: '/',
    name: 'Home',
    icon: HomeIcon,
    display: true,
    authentication: false,
    mobile: true,
  },
  {
    path: '/search',
    name: 'Search',
    icon: SearchIcon,
    display: true,
    authentication: false,
    mobile: true,
  },
  {
    path: '/collections',
    name: 'Collections',
    icon: ListIcon,
    display: true,
    authentication: true,
    mobile: true,
  },
  {
    path: '/profile',
    name: 'Profile',
    icon: ProfileIcon,
    display: true,
    authentication: false,
    mobile: true,
    divider: true,
  },
  {
    path: '/about',
    name: 'About',
    icon: InfoIcon,
    display: true,
    authentication: false,
    mobile: false,
  },
  {
    path: '/settings',
    name: 'Settings',
    icon: null,
    display: false,
    authentication: true,
    mobile: false,
    divider: false,
  },
];
