import { SearchForm } from '@/systems/search/components/filters/SearchForm';
import { Suspense } from 'react';

import type { LayoutProps } from '@/types/components/LayoutProps';

export default function SearchPage({ children }: LayoutProps): JSX.Element {
  return (
    <Suspense>
      <SearchForm />
      {children}
    </Suspense>
  );
}
