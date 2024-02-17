import { parseMedia } from '@/systems/search/common';
import { absoluteUrl } from '@/utils/absoluteUrl';
import { env } from '@/utils/env';

import type { Metadata } from 'next';
import type { MovieDetails, TvShowDetails } from 'tmdb-ts';

type Args<T extends TvShowDetails | MovieDetails> = {
  slug: string;
  action: (id: number) => Promise<T | null>;
};

export async function metadata<T extends MovieDetails | TvShowDetails>({ action, slug }: Args<T>): Promise<Metadata> {
  const id: number = Number(slug);

  if (Number.isNaN(id)) {
    return {};
  }

  const data = await action(id);

  if (!data) {
    return {};
  }

  const parsed = parseMedia(data);

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title: parsed.name,
    description: parsed.overview,
    openGraph: {
      title: parsed.name,
      description: parsed.overview,
      type: 'website',
      url: absoluteUrl(parsed.path),
      images: [{ url: parsed.backdrop }],
    },
    twitter: {
      card: 'summary_large_image',
      title: parsed.name,
      description: parsed.overview,
      images: [parsed.backdrop],
    },
  };
}
