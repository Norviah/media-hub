import { details } from '@/actions/tmdb';
import { absoluteUrl } from '@/utils/absoluteUrl';
import { env } from '@/utils/env';
import { imageUrl } from '@/utils/tmdb';

import type { MovieDetails, TvShowDetails } from '@/types/tmdb';
import type { Metadata } from 'next';

type Args<T extends TvShowDetails | MovieDetails> = { slug: string } & (T extends TvShowDetails
  ? { type: 'tv' }
  : { type: 'movie' });

export async function metadata<T extends MovieDetails | TvShowDetails>({ type, slug }: Args<T>): Promise<Metadata> {
  const id: number = Number(slug);

  if (Number.isNaN(id)) {
    return {};
  }

  const data = await details<MovieDetails | TvShowDetails>({ type, id });

  if (!data) {
    return {};
  }

  const title: string = data.type === 'movie' ? data.title : data.name;
  const ogImage: string = imageUrl({ path: data.backdrop_path, alt: title });
  const description: string = data.overview.length > 0 ? data.overview : '[No description available]';

  const metadata: Metadata = {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: absoluteUrl(`/${type}/${slug}`),
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description,
      images: [ogImage],
    },
  };

  return metadata;
}
