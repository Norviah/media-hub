import { DetailsPage } from '@/components/media/Details';
import { metadata } from '@/components/media/metadata';

import type { MovieDetails } from '@/types/tmdb';
import type { Metadata } from 'next';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return await metadata<MovieDetails>({ slug: params.slug, type: 'movie' });
}

export default async function SlugPage({ params }: PageProps): Promise<JSX.Element> {
  return <DetailsPage slug={params.slug} type="movie" />;
}
