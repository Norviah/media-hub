import Link from 'next/link';

import { ErrorImage } from '@/components/ErrorImage';
import { Card } from '@/components/ui/Card';

import { cn } from '@/utils/cn';
import { parse } from '../../util/parse';

import type { MovieSearchResult, TvSearchResult } from '@/actions/tmdb';
import type { LayoutItem } from '../../util/constants';
import type { BasicMediaData } from '../../util/parse';

function ListCard({ data }: { data: BasicMediaData }): JSX.Element {
  return (
    <Card className="flex w-full flex-row">
      <ErrorImage
        alt={data.name}
        className="rounded-l-lg object-cover"
        src={data.picture}
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
        {data.overview && (
          <p className="text-foreground">
            {data.overview.length > 200 ? `${data.overview.substring(0, 200)}...` : data.overview}
          </p>
        )}
      </div>
    </Card>
  );
}

function ImageCard({ data }: { data: BasicMediaData }): JSX.Element {
  return (
    <Card className="relative inline-block h-full w-full border-none shadow-lg hover:shadow-xl">
      <ErrorImage
        src={data.picture}
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

type Props = {
  results: (TvSearchResult | MovieSearchResult)[];
  layout: LayoutItem['key'];
};

export function Grid({ results, layout }: Props): JSX.Element {
  return (
    <div
      className={cn(
        cn(
          layout === 'grid' && 'grid grid-cols-3 gap-7 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5',
          layout === 'list' && 'grid grid-cols-1 gap-5'
        )
      )}
    >
      {results.map((result) => {
        const data = parse(result);

        return (
          <Link className="relative inline-block cursor-pointer" href={`/${result.type}/${result.id}`} key={result.id}>
            {layout === 'grid' ? <ImageCard data={data} /> : <ListCard data={data} />}
          </Link>
        );
      })}
    </div>
  );
}
