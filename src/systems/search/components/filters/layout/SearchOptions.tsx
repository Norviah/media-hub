'use client';

import { Header } from '@/components/ui/typography/Header';
import { Year } from '../Year';

import { basePath } from '@/systems/search/util/constants';
import { usePathname } from 'next/navigation';

export function SearchOptions(): JSX.Element | null {
  const pathname = usePathname();

  return pathname === basePath.path ? null : (
    <div className="flex flex-col justify-end gap-2">
      <Header type="h5">Year</Header>
      <Year />
    </div>
  );
}
