import { getCurrentUser } from '@/utils/auth/session';

import { Page } from '@/components/ui/Page';
import { Suspense } from 'react';
import { Header } from './(layout)/components/Header';
import { SideBar } from './(layout)/components/SideBar';

import type { LayoutProps } from '@/types/LayoutProps';

async function Sidebar(): Promise<JSX.Element> {
  const user = await getCurrentUser();

  return <SideBar authenticated={user !== undefined} />;
}

export default function RootLayout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Suspense fallback={<SideBar authenticated={false} />}>
        {/* @ts-expect-error Async server component */}
        <Sidebar />
      </Suspense>
      <Page>
        {/* @ts-expect-error Async server component */}
        <Header />
        <div className="m-10 lg:ml-16 lg:mr-16 xl:ml-20 xl:mr-20">{children}</div>
      </Page>
    </>
  );
}
