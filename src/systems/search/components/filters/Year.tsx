'use client';

import { ScrollArea } from '@/components/ui/ScrollArea';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from '@/components/ui/Select';

import { useRouter, useSearchParams } from 'next/navigation';
import { constructUrl } from '../../util/constructUrl';
import { validYears } from '../../util/years';

export function Year(): JSX.Element {
  const router = useRouter();
  const params = useSearchParams();

  const selectedYear = params.get('year') ?? undefined;

  return (
    <Select
      onValueChange={(value) => {
        router.push(constructUrl(params, { year: value }));
      }}
      value={selectedYear}
    >
      <SelectTrigger className="h-9 w-[7rem] justify-between border-none bg-card shadow-lg hover:bg-transparent focus:outline-none">
        {selectedYear ? selectedYear : <p className="text-muted-foreground">Any</p>}
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
