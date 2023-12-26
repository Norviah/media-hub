import { DetailsPage } from '@/systems/details/components/Details';
import { metadata } from '@/systems/details/util/metadata';

import type { TvShowDetails } from '@/types/tmdb';
import type { Metadata } from 'next';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return await metadata<TvShowDetails>({ slug: params.slug, type: 'tv' });
}

export default async function SlugPage({ params }: PageProps): Promise<JSX.Element> {
  return <DetailsPage slug={params.slug} type="tv" />;
}
