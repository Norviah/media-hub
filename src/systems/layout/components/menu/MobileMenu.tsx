'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/Button';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/Sheet';
import { MenuIcon } from 'lucide-react';

import { cn } from '@/utils/cn';
import { usePathname } from 'next/navigation';
import { routes } from '../../utils/routes';

import type { HTMLAttributes } from 'react';

export function MobileMenu(props: HTMLAttributes<HTMLDivElement>): JSX.Element {
  const pathname = usePathname();

  return (
    <div {...props}>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="icon" size="icon">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="w-[300px]">
          <SheetHeader>
            <SheetTitle>MediaHub</SheetTitle>
          </SheetHeader>

          <div className="mt-10 flex flex-col gap-7">
            {routes.map((item, index) => (
              <Link
                href={item.path}
                className={cn(
                  'text-sm transition-colors',
                  pathname === item.path ? 'text-foreground' : 'text-foreground/70'
                )}
                key={index}
              >
                <SheetClose className="flex flex-row gap-2">
                  <item.icon className="h-5 w-5" />
                  <p>{item.title}</p>
                </SheetClose>
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
