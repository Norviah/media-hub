'use client';

import { DynamicBadge } from './DynamicBadge';

import { SearchParams } from '@/utils/params';
import { usePathname, useRouter } from 'next/navigation';
import { constructUrl } from '../../util/constructUrl';

export function ClearAllTags({ render }: { render: boolean }): JSX.Element | null {
  const router = useRouter();
  const pathname = usePathname();

  if (!render) {
    return null;
  }

  return (
    <DynamicBadge
      variant="default"
      onClick={() => {
        router.push(
          constructUrl({
            path: pathname,
            overrides: {
              [SearchParams.GENRES]: undefined,
              [SearchParams.SORT]: undefined,
              [SearchParams.YEAR]: undefined,
            },
          })
        );
      }}
    >
      Clear All
    </DynamicBadge>
  );
}
