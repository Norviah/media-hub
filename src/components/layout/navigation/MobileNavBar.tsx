import Link from 'next/link';
import React from 'react';

import { Logo } from '@/components/icons/Logo';

import { useLockBody } from '@/hooks/useLockBody';
import { cn } from '@/utils/cn';

import type { RouteItem } from '@/types/Route';

export function MobileNavBar(props: { items: RouteItem[] }): React.ReactNode {
  useLockBody();

  return (
    <div
      className={cn(
        'fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden'
      )}
    >
      <div className="text-popover-foreground relative z-20 grid gap-6 rounded-md bg-card p-4 shadow-md">
        <Link href="/" className="flex items-center space-x-2">
          <Logo />
          <span className="font-bold">name</span>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {props.items.map((item: RouteItem, index: number) => (
            <Link
              key={index}
              href={item.path}
              className={cn('flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline')}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
