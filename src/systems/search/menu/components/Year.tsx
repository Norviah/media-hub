'use client';

import { ScrollArea } from '@/components/ui/ScrollArea';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from '@/components/ui/Select';

import { SearchParams } from '@/utils/params';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useParsedQuery } from '../../common/hooks';
import { constructUrl } from '../../common/utils';
import { validYears } from '../utils/constants';

import type { SelectTriggerProps } from '@radix-ui/react-select';

export function Year(props: SelectTriggerProps): JSX.Element {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();

  const { year } = useParsedQuery();

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
      <SelectTrigger {...props}>{year ? year : <p className="text-muted-foreground">Any</p>}</SelectTrigger>
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
