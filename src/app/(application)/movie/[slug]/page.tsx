import { Details } from '@/systems/details/components/Details';

import { metadata } from '@/systems/details/util/metadata';
import { getMovie } from '@/systems/search/common';

import type { Metadata } from 'next';
import type { MovieDetails } from 'tmdb-ts';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return await metadata<MovieDetails>({ slug: params.slug, action: getMovie });
}

export default async function MoviePage({ params }: PageProps): Promise<JSX.Element> {
  return <Details slug={params.slug} action={getMovie} />;
}
