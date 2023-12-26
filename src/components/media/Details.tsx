import { ErrorImage } from '@/components/ErrorImage';
import { AspectRatio } from '@/components/ui/AspectRatio';
import { Badge } from '@/components/ui/Badge';

import { details } from '@/actions/tmdb';
import { imageUrl } from '@/utils/tmdb';
import { notFound } from 'next/navigation';

import type { MovieDetails, TvShowDetails } from '@/types/tmdb';
import { StarIcon } from 'lucide-react';

export async function DetailsPage({ slug, type }: { slug: string; type: 'movie' | 'tv' }): Promise<JSX.Element> {
  const id: number = Number(slug);

  if (Number.isNaN(id)) {
    return notFound();
  }

  const data = await details<TvShowDetails | MovieDetails>({ type, id });

  if (!data) {
    return notFound();
  }

  const name: string = data.type === 'movie' ? data.title : data.name;

  return (
    <main className="space-y-2">
      <AspectRatio ratio={2} className="relative min-h-[125px]">
        <ErrorImage
          src={imageUrl({ path: data.backdrop_path, alt: name })}
          alt={name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/10" />
        <div className="absolute bottom-0 left-0 -mb-[62.5px] ml-4 max-w-2xl">
          <div className="flex flex-row gap-4">
            <ErrorImage
              src={imageUrl({ path: data.poster_path, alt: name })}
              alt={name}
              width={125}
              height={125}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-md object-cover"
              priority
            />
          </div>
        </div>
        <div className="absolute -bottom-4 left-40 flex space-y-2">
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-md text-dark mb-1 font-bold dark:text-white md:text-2xl">{name}</p>
              <div className="flex flex-row gap-2">
                <StarIcon className="fill-nord-yellow text-nord-yellow" />
                <p>{Number(data.vote_average.toFixed(1))}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {data.genres.map((genre, index) => (
                <Badge key={index}>{genre.name}</Badge>
              ))}
            </div>
          </div>
        </div>
      </AspectRatio>
      <div className="h-[62.5px]" />
      <div className="mx-4">
        <p>{data.overview.length > 0 ? data.overview : '[No description available]'}</p>
      </div>
    </main>
  );
}
