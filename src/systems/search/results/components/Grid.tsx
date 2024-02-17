import Link from 'next/link';

import { ErrorImage } from '@/components/ErrorImage';
import { Card } from '@/components/ui/Card';

import type { LayoutItem, Media } from '../../common/utils';

function ListCard({ data }: { data: Media }): JSX.Element {
  return (
    <Card className="flex w-full flex-row">
      <ErrorImage
        alt={data.name}
        className="rounded-l-lg object-cover"
        src={data.poster}
        style={{
          aspectRatio: '150/200',
          objectFit: 'cover',
        }}
        height="100"
        width="100"
      />

      <div className="flex-grow p-3">
        <span>
          <h2 className="text-lg font-semibold">{data.name}</h2>
          {data.year && <p className="mb-3 text-sm text-muted-foreground">{data.year}</p>}
        </span>
        {data.overview && <p className="text-foreground">{data.overview}</p>}
      </div>
    </Card>
  );
}

function ImageCard({ data }: { data: Media }): JSX.Element {
  return (
    <Card className="relative inline-block h-full w-full border-none shadow-lg hover:shadow-xl">
      <ErrorImage
        src={data.poster}
        alt={data.name}
        width={200}
        height={250}
        priority
        className="relative h-full w-full rounded-lg object-contain"
        style={{
          objectFit: 'cover',
        }}
      />

      <div className="absolute inset-0 rounded-b-lg bg-gradient-to-t from-black to-black/10" />
      <div className="absolute bottom-4 px-4 text-white">
        <h2 className="text-xl font-bold">{data.name}</h2>
        {data.year && <p className="text-sm">{data.year}</p>}
      </div>
    </Card>
  );
}

type GridProps = {
  results: Media[];
  layout: LayoutItem['key'];
};

export function Grid({ results, layout }: GridProps): JSX.Element {
  return (
    <div
      className={
        layout === 'grid' ? 'grid grid-cols-3 gap-7 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5' : 'grid grid-cols-1 gap-5'
      }
    >
      {results.map((data) => {
        return (
          <Link className="relative inline-block cursor-pointer" href={data.path} key={data.id}>
            {layout === 'grid' ? <ImageCard data={data} /> : <ListCard data={data} />}
          </Link>
        );
      })}
    </div>
  );
}
