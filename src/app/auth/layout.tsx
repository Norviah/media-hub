import Link from 'next/link';

import { ThemeSelector } from '@/components/ThemeSelector';
import { Button } from '@/components/ui/Button';
import { PageHeader } from '@/components/ui/Page';

import type { LayoutProps } from '@/types/LayoutProps';

export default function AuthLayout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <PageHeader className="fixed top-0 z-40 w-full bg-background/80 backdrop-blur">
        <div className="flex flex-1 items-center justify-end space-x-2 sm:space-x-4">
          <nav className="flex items-center gap-1">
            <span className="flex items-center gap-1">
              <ThemeSelector />
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <div className="flex flex-row gap-2">
                    <span>Home</span>
                  </div>
                </Button>
              </Link>
            </span>
          </nav>
        </div>
      </PageHeader>

      <div className="h mx-auto flex h-screen w-full flex-col justify-center space-y-6 sm:w-[350px]">
        {children}
      </div>
    </>
  );
}
