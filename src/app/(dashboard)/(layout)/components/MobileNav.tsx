'use client';

import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

import { SidebarOpen as SidebarOpenIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { ScrollArea } from '@/components/ui/ScrollArea';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet';
import { siteConfig } from '@/config/site';

import { routes } from '../routes';

export function MobileNav(): JSX.Element {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <SidebarOpenIcon className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        size="lg"
        position="left"
        className="border-dashed border-background border-r-border pr-0"
      >
        <Link
          href="/"
          className="flex items-center"
          onClick={() => {
            setOpen(false);
          }}
        >
          <Logo className="mr-2 h-4 w-4" />
          <span className="font-bold">{siteConfig.name}</span>
        </Link>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            {routes.map((route, index) => (
              <Link
                key={index}
                href={route.path}
                onClick={() => {
                  setOpen(false);
                }}
                className={pathname === route.path ? 'text-primary underline' : undefined}
              >
                {route.name}
              </Link>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
