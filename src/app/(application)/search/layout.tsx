import { SearchLayout } from '@/systems/search';
import { Suspense } from 'react';

import type { LayoutProps } from '@/types';

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <Suspense>
      <SearchLayout>{children}</SearchLayout>
    </Suspense>
  );
}
