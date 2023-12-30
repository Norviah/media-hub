'use client';

import { Tags } from '../Tags';
import { Layout } from './Layout';

import { basePath } from '@/systems/search/util/constants';
import { usePathname } from 'next/navigation';

export function MetaInformation(): JSX.Element | null {
  const pathname = usePathname();

  return pathname === basePath.path ? null : (
    <div className="flex flex-row justify-between">
      <Tags />
      <div className="flex flex-row gap-2">
        <Layout />
      </div>
    </div>
  );
}
