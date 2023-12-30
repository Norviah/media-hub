import Link from 'next/link';

import { ErrorImage } from '@/components/ErrorImage';
import { ScrollArea, ScrollBar } from '@/components/ui/ScrollArea';
import { BasicMediaData } from '../../util/parse';
import { Skeleton } from '@/components/ui/Skeleton';

function RowContainer({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <ScrollArea>
      <div className="flex w-max space-x-4 pb-4">{children}</div>
      <ScrollBar orientation="horizontal" className="h-3" />
    </ScrollArea>
  );
}

export function RowSkeleton(): JSX.Element {
  return (
    <RowContainer>
      {Array(20)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="flex flex-col gap-2">
            <Skeleton className="h-[300px] w-[200px] rounded-lg object-cover" />
            <div className="break-words font-bold">
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
        ))}
    </RowContainer>
  );
}

export function Row({ data }: { data: BasicMediaData[] }): JSX.Element {
  return (
    <RowContainer>
      {data.map((item, i) => (
        <Link href={item.path} key={i}>
          <div key={i} className="flex flex-col gap-2">
            <ErrorImage src={item.picture} alt={item.name} className="rounded-lg object-cover" width={200} height={300} />
            <div className="w-48 break-words font-bold">
              <p>{item.name}</p>
            </div>
          </div>
        </Link>
      ))}
    </RowContainer>
  );
}
