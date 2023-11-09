'use client';

import Link from 'next/link';
import React from 'react';

import { Logo } from '@/components/icons/Logo';
import { XIcon } from 'lucide-react';
import { MobileNavBar } from './MobileNavBar';

import { nav } from '@/components/layout/navigation/routes';
import { cn } from '@/utils/cn';
import { useSelectedLayoutSegment } from 'next/navigation';

import type { Route } from '@/types/Route';

export function NavBar(): JSX.Element {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Logo />
        <span className="hidden font-bold sm:inline-block">{'Media Hub'}</span>
      </Link>

      {nav?.length ? (
        <nav className="hidden gap-6 md:flex">
          {nav?.map((item: Route, index: number) => (
            <Link
              key={index}
              href={item.path}
              className={cn(
                'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
                item.path.startsWith(`/${segment}`) ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <button className="flex items-center space-x-2 md:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
        {showMobileMenu ? <XIcon /> : <Logo />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && nav?.length && <MobileNavBar items={nav} />}
    </div>
  );
}
