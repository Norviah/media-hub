'use client';

import { ScrollArea } from '@/components/ui/ScrollArea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
} from '@/components/ui/Select';

import { SearchParams } from '@/utils/params';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { constructUrl, movieSortOptionsGroup, parseParams, tvSortOptionsGroup } from '../../common/utils';

export function Sort(): JSX.Element {
  const pathname = usePathname();
  const params = useSearchParams();
  const router = useRouter();

  const { sort } = parseParams(pathname, params);

  const sortOptionsGroup = pathname === '/search/tv' ? tvSortOptionsGroup : movieSortOptionsGroup;

  return (
    <Select
      value={sort.value}
      onValueChange={(newValue) => {
        const href = constructUrl({
          params,
          path: pathname,
          overrides: { [SearchParams.SORT]: newValue },
        });

        router.push(href);
      }}
    >
      <SelectTrigger
        className="flex h-5 justify-between gap-2 border-none px-0 text-muted-foreground shadow-none transition-colors hover:text-foreground focus:ring-0 data-[state=open]:text-foreground"
        iconPosition="left"
      >
        <p>{sort.fullTitle}</p>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <ScrollArea className="h-72">
            <div className="flex flex-col gap-2">
              {sortOptionsGroup.map((group, i) => (
                <span key={i}>
                  <SelectLabel className="text-sm">{group.header}</SelectLabel>
                  <SelectSeparator />
                  {group.options.map((option, j) => (
                    <SelectItem key={j} value={option.value}>
                      {option.title}
                    </SelectItem>
                  ))}
                </span>
              ))}
            </div>
          </ScrollArea>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
