import { SearchLayout } from '@/systems/search/components/Layout';
import { Suspense } from 'react';

import type { LayoutProps } from '@/types';

export default function SearchLayou({ children }: LayoutProps): JSX.Element {
  return (
    <Suspense>
      <SearchLayout>{children}</SearchLayout>
    </Suspense>
  );
}
