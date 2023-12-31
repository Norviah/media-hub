'use client';

import { Header } from '@/components/ui/typography/Header';
import { Year } from './Year';

import { basePath } from '@/systems/search/util/constants';
import { usePathname } from 'next/navigation';

export function YearContainer(props: React.HTMLAttributes<HTMLDivElement>): JSX.Element | null {
  const pathname = usePathname();

  if (basePath.path === pathname) {
    return null;
  }

  return (
    <div {...props}>
      <Header type="h5">Year</Header>
      <Year />
    </div>
  );
}
