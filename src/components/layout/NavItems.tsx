'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { routes } from './routes';

import type { RouteItem } from '@/types';

function NavItem({ route }: { route: RouteItem }): JSX.Element {
  const pathname = usePathname();
  const isActive = route.path === '/' ? pathname === '/' : pathname.startsWith(route.path);

  return (
    <Link
      href={route.path}
      className={cn(
        'font-semibold text-foreground text-sm transition-colors',
        isActive ? 'text-foreground-dark' : 'text-foreground-light hover:text-foreground-dark',
      )}
    >
      {route.title}
    </Link>
  );
}

export function NavItems(): JSX.Element {
  return (
    <div className='flex gap-x-5'>
      {routes.map((item) => (
        <NavItem route={item} key={item.path} />
      ))}
    </div>
  );
}
