import Link from 'next/link';

import { ThemeSelector } from '@/components/ThemeSelector';
import { Logo } from '@/components/icons/Logo';
import { SpinnerIcon } from '@/components/icons/Spinner';
import { Suspense } from 'react';
import { RenderUserMenu } from '../menu/RenderUserMenu';
import { NavItems } from './NavItems';

import { cn } from '@/utils/cn';

export function DesktopNav({ className }: { className?: string }): JSX.Element {
  return (
    <nav className={cn('container hidden items-center justify-between py-6 md:flex', className)} aria-label="Global">
      <div className="flex flex-row items-center gap-10">
        <div className="flex flex-1 font-semibold">
          <Link href="/" className="flex flex-row items-center gap-2">
            <Logo />
            <p>Media Hub</p>
          </Link>
        </div>

        <NavItems />
      </div>

      <div className="flex gap-3 lg:flex-1 lg:justify-end">
        <ThemeSelector />

        <Suspense
          fallback={
            <span className="inline-flex h-8 w-8 items-center justify-center">
              <SpinnerIcon />
            </span>
          }
        >
          <RenderUserMenu />
        </Suspense>
      </div>
    </nav>
  );
}
