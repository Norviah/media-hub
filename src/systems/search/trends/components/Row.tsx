import Link from 'next/link';

import { ErrorImage } from '@/components/ErrorImage';
import { ScrollArea, ScrollBar } from '@/components/ui/ScrollArea';
import { Skeleton } from '@/components/ui/Skeleton';

import type { Media } from '../../common/utils/media';

function RowContainer({ data }: { data: React.ReactNode[] }): JSX.Element {
  return (
    <ScrollArea>
      <div className="flex flex-col gap-3">
        {data.map((row: React.ReactNode, i) => (
          <div key={i} className="flex h-full w-max gap-8">
            {row}
          </div>
        ))}
        <ScrollBar orientation="horizontal" className="h-3" />
      </div>
    </ScrollArea>
  );
}

export function RowSkeleton(): JSX.Element {
  const dummyData = Array(20)
    .fill(0)
    .map((_, i) => (
      <div key={i} className="flex flex-col gap-2">
        <Skeleton className="h-[300px] w-[200px] rounded-lg object-cover" />
        <div className="break-words font-bold">
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    ));

  return <RowContainer data={[dummyData, dummyData]} />;
}

function GenerateRow({ items }: { items: Media[] }): JSX.Element[] {
  return items.map((item, i) => (
    <Link href={item.path} key={i}>
      <div className="flex flex-col gap-2">
        <ErrorImage
          src={item.poster}
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
  ));
}

export function Row({ data }: { data: Media[] }): JSX.Element {
  return (
    <RowContainer
      data={[<GenerateRow key={0} items={data.slice(0, 10)} />, <GenerateRow key={1} items={data.slice(10, 20)} />]}
    />
  );
}
