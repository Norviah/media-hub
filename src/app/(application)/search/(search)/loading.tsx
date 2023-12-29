'use client';

import { SearchSkeleton } from '@/systems/search/components/results/Skeleton';
import { defaultLayout, layouts } from '@/systems/search/util/constants';
import { useSearchParams } from 'next/navigation';

export default function MovieLoadingPage(): JSX.Element {
  const params = useSearchParams();
  const layoutParam = params.get('layout');
  const layout = layouts.find((item) => item.slug === layoutParam) || defaultLayout;

  return <SearchSkeleton layout={layout.key} />;
}
