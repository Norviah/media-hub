import { SearchControls } from '@/systems/search/menu';

import type { LayoutProps } from '@/types/components/LayoutProps';

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <SearchControls />

      {children}
    </>
  );
}
