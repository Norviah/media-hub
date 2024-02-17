import { ThemeSelector } from '@/components/ThemeSelector';
import { SpinnerIcon } from '@/components/icons/Spinner';
import { Suspense } from 'react';
import { MobileMenu } from '../menu/MobileMenu';
import { RenderUserMenu } from '../menu/RenderUserMenu';

import { cn } from '@/utils/cn';

export function MobileNav({ className }: { className?: string }): JSX.Element {
  return (
    <nav className={cn('container flex items-center justify-between p-6 md:hidden', className)}>
      <MobileMenu />

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
