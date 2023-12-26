import Link from 'next/link';

import { Card } from '@/components/ui/Card';
import { ErrorImage } from '@/components/ErrorImage';

import { cn } from '@/utils/cn';
import { imageUrl } from '@/utils/tmdb';

import type { Media } from '@/types/Media';
import type { LayoutItem } from './constants';

type Information = {
  name: string;
  year: string | undefined;
  picture: string;
  overview: string | undefined;
  type: Media['type'];
  id: number;
};

function parse(media: Media): Information {
  const name: string = media.type === 'movie' ? media.original_title : media.name;
  const year: string | undefined = media.type === 'movie' ? media.release_date : media.first_air_date;
  const picture: string = imageUrl({ path: media.poster_path, alt: name });
  const overview: string = media.overview.length > 0 ? media.overview : '[No description available]';

  return { name, year, picture, overview, id: media.id, type: media.type };
}

function ListCard({ media }: { media: Information }): JSX.Element {
  return (
    <Card className="flex w-full flex-row">
      <ErrorImage
        alt={media.name}
        className="rounded-l-lg object-cover"
        src={media.picture}
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
      <ErrorImage
        src={media.picture}
        alt={media.name}
        width={250}
        height={300}
        priority
        className="relative h-full w-full rounded-lg object-contain"
        style={{
          objectFit: 'cover',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black to-black/10" />
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
            href={`/${result.type}/${result.id}`}
            key={result.id}
          >
            {layout === 'grid' ? <ImageCard media={media} /> : <ListCard media={media} />}
          </Link>
        );
      })}
    </div>
  );
}
