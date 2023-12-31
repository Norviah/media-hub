'use client';

import { ScrollArea } from '@/components/ui/ScrollArea';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from '@/components/ui/Select';

import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import { SearchParams } from '@/utils/params';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { constructUrl } from '../../../util/constructUrl';
import { parseParams } from '../../../util/parseParams';
import { validYears } from '../../../util/years';

export function Year(): JSX.Element {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();

  const { year } = parseParams(pathname, params);

  return (
    <Select
      onValueChange={(value) => {
        const href = constructUrl({
          path: pathname,
          params,
          overrides: { [SearchParams.YEAR]: value },
        });

        router.push(href);
      }}
      value={String(year)}
    >
      <SelectTrigger
        className={cn(
          buttonVariants({ variant: 'outline' }),
          'h-9 w-[7rem] justify-between border-none bg-card shadow-lg hover:bg-transparent focus:outline-none'
        )}
      >
        {year ? year : <p className="text-muted-foreground">Any</p>}
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <ScrollArea className="h-72">
            {validYears.map((year) => (
              <SelectItem key={year} value={String(year)}>
                {year}
              </SelectItem>
            ))}
          </ScrollArea>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
