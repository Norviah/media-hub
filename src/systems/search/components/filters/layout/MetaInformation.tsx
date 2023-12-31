'use client';

import { Separator } from '@/components/ui/Separator';
import { Sort } from '../Sort';
import { Tags } from '../Tags';
import { Layout } from './Layout';

import { basePath } from '@/systems/search/util/constants';
import { usePathname } from 'next/navigation';

export function MetaInformation(): JSX.Element | null {
  const pathname = usePathname();

  if (pathname === basePath.path) {
    return null;
  }

  return (
    <div className="flex flex-row justify-between">
      <Tags />
      <div className="flex flex-row gap-3">
        <Sort />
        <Separator className="bg-muted-foreground" orientation="vertical" />
        <div className="flex flex-row gap-1">
          <Layout />
        </div>
      </div>
    </div>
  );
}
