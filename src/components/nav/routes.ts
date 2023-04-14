import ListIcon from '@mui/icons-material/FormatListBulleted';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ProfileIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';

import type { Route } from '@/types/components/nav';

export const routes: Route[] = [
  {
    path: '/',
    name: 'Home',
    icon: HomeIcon,
    authentication: false,
  },
  {
    path: '/search',
    name: 'Search',
    icon: SearchIcon,
    authentication: false,
  },
  {
    path: '/collections',
    name: 'Collections',
    icon: ListIcon,
    authentication: true,
  },
  {
    path: '/profile',
    name: 'Profile',
    icon: ProfileIcon,
    authentication: false,
  },
  {
    path: '/about',
    name: 'About',
    icon: InfoIcon,
    authentication: false,
  },
];
