import type { Route } from '@/types/Route';
import { CogIcon, UserIcon } from 'lucide-react';

export const profileRoutes: Route[] = [
  {
    title: 'Profile',
    path: '/profile',
    icon: UserIcon,
  },
  {
    title: 'Settings',
    path: '/profile/settings',
    icon: CogIcon,
  },
];
