import { ThemeSelector } from '@/components/ThemeSelector';

import { CommandMenu } from './CommandMenu';
import { MobileNav } from './MobileNav';
import { UserMenu } from './UserMenu';
import { Suspense } from 'react';
import { SpinnerIcon } from '@/components/ui/Icons';
import { PageHeader } from '@/components/ui/Page';

import { getCurrentUser } from '@/utils/auth/session';

async function RenderUserMenu(): Promise<JSX.Element> {
  const user = await getCurrentUser();

  return <UserMenu user={user} />;
}

export async function Header(): Promise<JSX.Element> {
  return (
    <PageHeader>
      <MobileNav />
      <div className="flex flex-1 items-center justify-end space-x-2 sm:space-x-4">
        <nav className="flex items-center gap-1">
          <span className="flex items-center gap-1">
            <CommandMenu />
            <ThemeSelector />
          </span>
          <Suspense fallback={<SpinnerIcon className="h-4 w-4 animate-spin text-foreground" />}>
            {/* @ts-expect-error Async component */}
            <RenderUserMenu />
          </Suspense>
        </nav>
      </div>
    </PageHeader>
  );
}
