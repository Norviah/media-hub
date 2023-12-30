'use client';

import { SearchSkeleton } from '@/systems/search/components/results/Skeleton';

import { defaultLayout, layouts } from '@/systems/search/util/constants';
import { SearchParams } from '@/utils/params';
import { useSearchParams } from 'next/navigation';

export default function MovieLoadingPage(): JSX.Element {
  const params = useSearchParams();
  const layoutParam = params.get(SearchParams.LAYOUT);
  const layout = layouts.find((item) => item.slug === layoutParam) || defaultLayout;

  return <SearchSkeleton layout={layout.key} />;
}
