import { Details } from '@/systems/details/components/Details';

import { metadata } from '@/systems/details/util/metadata';
import { getTvShow } from '@/systems/search/common';

import type { Metadata } from 'next';
import type { TvShowDetails } from 'tmdb-ts';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return await metadata<TvShowDetails>({ slug: params.slug, action: getTvShow });
}

export default async function TVShowPage({ params }: PageProps): Promise<JSX.Element> {
  return <Details slug={params.slug} action={getTvShow} />;
}
