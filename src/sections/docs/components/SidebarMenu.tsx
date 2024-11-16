'use client';

import { IconButton } from '@/components/ui/Button';
import { DialogTitle } from '@/components/ui/Dialog';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet';
import { MenuIcon } from 'lucide-react';
import { DocumentationSidebar } from './Sidebar';

import { cn } from '@/lib/utils';

import type { IconButtonProps } from '@/components/ui/Button';

export type SidebarMenuProps = Omit<IconButtonProps, 'icon' | 'children'>;

export function SidebarMenu({ className, size, ...props }: SidebarMenuProps): JSX.Element {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <IconButton
          size='small'
          className={cn('text-foreground-light hover:text-foreground', className)}
          {...props}
        >
          <MenuIcon className='size-4' />
          <span className='sr-only'>Toggle Menu</span>
        </IconButton>
      </SheetTrigger>

      <SheetContent side='left' className='w-[300px]' aria-describedby='Menu'>
        <DialogTitle className='sr-only'>Documentation Sidebar Menu</DialogTitle>

        <DocumentationSidebar menu />
      </SheetContent>
    </Sheet>
  );
}
