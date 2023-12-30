'use client';

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from '@/components/ui/Select';

import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { basePath, paths } from '../../util/constants';
import { constructUrl } from '../../util/constructUrl';

import type { Route } from 'next';

export function Format(): JSX.Element {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();

  const currentPath = paths.find((item) => item.path === pathname)!;

  return (
    <Select
      value={currentPath.path}
      onValueChange={(value: Route) => {
        if (value !== currentPath.path) {
          router.push(constructUrl({ path: value, params, reset: value === basePath.path }));
        }
      }}
    >
      <SelectTrigger
        className={cn(
          buttonVariants({ variant: 'outline' }),
          'h-9 w-[7rem] justify-between border-none bg-card shadow-lg hover:bg-transparent data-[placeholder]:text-muted-foreground'
        )}
      >
        <p>{currentPath.title}</p>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {paths.map((path, i) => (
            <SelectItem key={i} value={path.path}>
              {path.title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
