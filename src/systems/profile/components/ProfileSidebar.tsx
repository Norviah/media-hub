'use client';

import Link from 'next/link';

import { profileRoutes } from '@/systems/profile/util/routes';
import { cn } from '@/utils/cn';
import { usePathname } from 'next/navigation';

import type { RouteItem } from '@/types/Route';

export function ProfileSidebar(): JSX.Element {
  const path = usePathname();

  return (
    <nav className="grid items-start gap-2">
      {profileRoutes.map((route: RouteItem, index) => {
        return (
          <Link key={index} href={route.path}>
            <span
              className={cn(
                'group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors',
                path === route.path
                  ? 'bg-foreground-selected text-foreground'
                  : 'text-muted-foreground hover:bg-foreground-selected hover:text-foreground'
              )}
            >
              <route.icon className="mr-2 h-4 w-4" />
              <span>{route.title}</span>
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
