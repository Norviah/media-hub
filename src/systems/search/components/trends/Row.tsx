import Link from 'next/link';

import { ErrorImage } from '@/components/ErrorImage';
import { ScrollArea, ScrollBar } from '@/components/ui/ScrollArea';
import { Skeleton } from '@/components/ui/Skeleton';
import { BasicMediaData } from '../../util/parse';

import type { RequireExactlyOne } from 'type-fest';

type Props = {
  rows?: BasicMediaData[][];
  children?: React.ReactNode;
};

function RowContainer(props: RequireExactlyOne<Props>): JSX.Element {
  return (
    <ScrollArea>
      {props.rows
        ? props.rows.map((row: BasicMediaData[], i) => (
            <div key={i} className="flex h-full w-max gap-8 pb-5">
              {row.map((item, i) => {
                return (
                  <Link href={item.path} key={i}>
                    <div key={i} className="flex flex-col gap-2">
                      <ErrorImage
                        src={item.picture}
                        alt={item.name}
                        width={200}
                        height={250}
                        priority
                        className="relative h-[300px] rounded-lg object-contain"
                        style={{
                          objectFit: 'cover',
                        }}
                      />
                      <div className="w-[150px] break-words">
                        <p>{item.name}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ))
        : props.children}
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
  return <RowContainer rows={[data.slice(0, 10), data.slice(10, 20)]} />;
}
