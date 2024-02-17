import { SearchMenu } from '@/systems/search/menu';
import { Suspense } from 'react';

import type { LayoutProps } from '@/types/components/LayoutProps';

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <Suspense>
      <div className="flex flex-col gap-7">
        <SearchMenu />
        {children}
      </div>
    </Suspense>
  );
}
