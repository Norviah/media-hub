'use client';

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from '@/components/ui/Select';

import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import { useRouter, useSearchParams } from 'next/navigation';
import { defaultFilter, filters } from '../../util/constants';
import { constructUrl } from '../../util/constructUrl';

export function Filter(): JSX.Element {
  const params = useSearchParams();
  const router = useRouter();
  const filterParam = params.get('filter');
  const filter = filters.find((item) => item.slug === filterParam) || defaultFilter;

  return (
    <Select
      value={filter.key}
      onValueChange={(value) => {
        const filter = filters.find((item) => item.key === value) || defaultFilter;
        router.push(constructUrl(params, { filter: filter.slug || undefined }));
      }}
    >
      <SelectTrigger
        className={cn(
          buttonVariants({ variant: 'outline' }),
          'h-9 w-[110px] justify-between border-none bg-card shadow-lg hover:bg-transparent data-[placeholder]:text-muted-foreground'
        )}
      >
        <p>{filter.title}</p>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {filters.map((filter, i) => (
            <SelectItem key={i} value={filter.key}>
              {filter.title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
