import { CommandMenu } from '@/components/CommandMenu';
import { ThemeSelector } from '@/components/ThemeSelector';
import { SpinnerIcon } from '@/components/icons/Spinner';
import { Header } from '@/components/layout/Header';
import { UserMenu } from '@/components/layout/UserMenu';
import { NavBar } from '@/components/layout/navigation/NavBar';
import { Suspense } from 'react';

import { getCurrentUser } from '@/utils/auth/session';

import type { LayoutProps } from '@/types/components/LayoutProps';

async function RenderUserMenu(): Promise<JSX.Element> {
  const user = await getCurrentUser();

  return <UserMenu user={user} />;
}

export default function DashboardLayout(props: LayoutProps): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <Header div="justify-between">
        <NavBar />
        <div className="flex gap-1">
          <CommandMenu />
          <ThemeSelector />
          <Suspense
            fallback={
              <span className="inline-flex h-9 items-center justify-center rounded-md text-sm font-medium text-muted-foreground transition-colors">
                <SpinnerIcon className="h-5 w-5 animate-spin text-foreground" />
              </span>
            }
          >
            <RenderUserMenu />
          </Suspense>
        </div>
      </Header>

      <div className="px-10 py-5">{props.children}</div>
    </div>
  );
}
