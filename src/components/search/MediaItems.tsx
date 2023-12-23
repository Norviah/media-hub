import Link from 'next/link';

import { Card } from '@/components/ui/Card';
import { cn } from '@/utils/cn';

import type { Media } from '@/types/Media';
import type { LayoutItem } from './constants';

type Information = {
  name: string;
  year: string | undefined;
  picture: string | undefined;
  overview: string | undefined;
  type: Media['type'];
  id: number;
};

function parse(media: Media): Information {
  const name: string = media.type === 'movie' ? media.original_title : media.name;
  const year: string | undefined = media.type === 'movie' ? media.release_date : media.first_air_date;
  const picture: string | undefined = media.poster_path;
  const overview: string | undefined = media.overview;

  return { name, year, picture, overview, id: media.id, type: media.type };
}

function ListCard({ media }: { media: Information }): JSX.Element {
  return (
    <Card className="flex w-full flex-row">
      <img
        alt={media.name}
        className="rounded-l-lg object-cover"
        src={media.picture ? `https://image.tmdb.org/t/p/original${media.picture}` : ''}
        style={{
          aspectRatio: '150/200',
          objectFit: 'cover',
        }}
        height="100"
        width="100"
      />

      <div className="flex-grow p-3">
        <span>
          <h2 className="text-lg font-semibold">{media.name}</h2>
          {media.year && <p className="mb-3 text-sm text-muted-foreground">{media.year}</p>}
        </span>
        {media.overview && (
          <p className="text-foreground">
            {media.overview.length > 200 ? `${media.overview.substring(0, 200)}...` : media.overview}
          </p>
        )}
      </div>
    </Card>
  );
}

function ImageCard({ media }: { media: Information }): JSX.Element {
  return (
    <Card className="relative inline-block h-full w-full border-none">
      <img
        alt={media.name}
        className={'relative h-full w-full rounded-lg object-contain'}
        src={media.picture ? `https://image.tmdb.org/t/p/original/${media.picture}` : ''}
        style={{
          aspectRatio: '300/400',
          objectFit: 'cover',
        }}
        width="300"
        height="400"
      />
      <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent to-black opacity-80" />
      <div className="absolute bottom-4 left-4 text-white">
        <h2 className="text-xl font-bold">{media.name}</h2>
        {media.year && <p className="text-sm">{media.year}</p>}
      </div>
    </Card>
  );
}

export function MediaItems({ results, layout }: { results: Media[]; layout: LayoutItem['key'] }): JSX.Element {
  return (
    <div
      className={cn(
        layout === 'grid' && 'grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
        layout === 'list' && 'grid grid-cols-1 gap-4'
      )}
    >
      {results.map((result: Media) => {
        const media: Information = parse(result);

        return (
          <Link
            className="relative inline-block h-full w-full cursor-pointer"
            href={`/media?id=${result.id}&type=${result.type}`}
            key={result.id}
          >
            {layout === 'grid' ? <ImageCard media={media} /> : <ListCard media={media} />}
          </Link>
        );
      })}
    </div>
  );
}
