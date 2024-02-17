'use client';

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from '@/components/ui/Select';

import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { routes } from '../../common/utils';

import type { Route } from 'next';

export function SearchCategory(): JSX.Element {
  const pathname = usePathname();
  const router = useRouter();
  const params = useSearchParams();

  const currentRoute = routes.find((route) => route.path === pathname);

  return (
    <Select
      onValueChange={(route: Route) => {
        const desiredRoute = routes.find((r) => r.path === route);

        if (desiredRoute) {
          router.push(desiredRoute.parseParams(params));
        }
      }}
      value={currentRoute?.path}
    >
      <SelectTrigger
        className={cn(
          buttonVariants({ variant: 'outline' }),
          'h-full w-[7rem] justify-between rounded-l-none bg-muted hover:bg-card-accent data-[placeholder]:text-muted-foreground',
          'border-0 border-y border-r focus:ring-0'
        )}
      >
        <p>{currentRoute ? currentRoute.title : '¯\\_(ツ)_/¯'}</p>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {routes.map((route, i) => (
            <SelectItem key={i} value={route.path}>
              {route.title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
