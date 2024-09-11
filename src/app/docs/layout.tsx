import Link from 'next/link';

import { IconButton } from '@/components/ui/Button';
import { DocumentationSidebar, SidebarMenu } from '@/systems/docs';
import { HomeIcon } from 'lucide-react';

import type { LayoutProps } from '@/types';

export default function DocsLayout({ children }: LayoutProps) {
  return (
    <div className='container flex flex-row gap-14'>
      <DocumentationSidebar className='top-0 hidden shrink-0 pt-10 md:block' />

      <div className='space-y-10 py-10'>
        <div className='flex flex-row justify-between md:justify-end'>
          <div className='block md:hidden'>
            <SidebarMenu />
          </div>

          <Link href='/'>
            <IconButton size='small' className='text-foreground-light hover:text-foreground'>
              <HomeIcon className='size-4' />
            </IconButton>
          </Link>
        </div>

        {children}
      </div>
    </div>
  );
}
