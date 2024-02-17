import Link from 'next/link';

import { ThemeSelector } from '@/components/ThemeSelector';
import { Button } from '@/components/ui/Button';
import { PageHeader } from '@/systems/layout';

import type { LayoutProps } from '@/types/components/LayoutProps';

export default function AuthLayout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <PageHeader classes={{ container: 'absolute' }}>
        <div className="container flex justify-end gap-1 py-6 md:flex">
          <ThemeSelector />

          <Link href="/">
            <Button variant="ghost" className="h-8">
              Home
            </Button>
          </Link>
        </div>
      </PageHeader>

      <div className="h mx-auto flex h-screen w-full flex-col justify-center space-y-6 sm:w-[350px]">{children}</div>
    </>
  );
}
