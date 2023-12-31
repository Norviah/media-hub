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
import { constructUrl } from '@/systems/search/util/constructUrl';
import { sortOptionsGroup } from '@/systems/search/util/sort';
import { SearchParams } from '@/utils/params';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { parseParams } from '../../util/parseParams';

export function Sort(): JSX.Element {
  const pathname = usePathname();
  const params = useSearchParams();
  const router = useRouter();

  const { sort } = parseParams(pathname, params);

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
      <SelectTrigger className="flex h-5 justify-between gap-2 border-none shadow-none">
        <p className="text-muted-foreground transition-colors hover:text-foreground">{sort.fullTitle}</p>
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
