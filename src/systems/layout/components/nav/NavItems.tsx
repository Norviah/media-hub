'use client';

import Link from 'next/link';

import { cn } from '@/utils/cn';
import { usePathname } from 'next/navigation';
import { routes } from '../../utils/routes';

import type { RouteItem } from '@/types/Route';

function NavItem({ route }: { route: RouteItem }): JSX.Element {
  const pathname = usePathname();

  const isActive = pathname === route.path;

  return (
    <Link
      href={route.path}
      className={cn(
        'text-sm font-semibold text-foreground transition-colors',
        isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
      )}
    >
      {route.title}
    </Link>
  );
}

export function NavItems(): JSX.Element {
  return (
    <div className="flex gap-x-12">
      {routes.map((item, index) => (
        <NavItem route={item} key={index} />
      ))}
    </div>
  );
}
