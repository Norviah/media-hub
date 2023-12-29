'use client';

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from '@/components/ui/Select';

import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { paths } from '../../util/constants';
import { constructUrl } from '../../util/constructUrl';

import type { Path } from '@/types/Path';

export function Filter(): JSX.Element {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();

  const currentPath = paths.find((item) => item.path === pathname)!;

  return (
    <Select
      value={currentPath.path}
      onValueChange={(value: Path) => {
        if (value !== currentPath.path) {
          router.push(constructUrl({ path: value, params }));
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
          {paths.map((filter, i) => (
            <SelectItem key={i} value={filter.path}>
              {filter.title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
