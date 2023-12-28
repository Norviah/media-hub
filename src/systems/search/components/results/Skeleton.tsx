import { Card } from '@/components/ui/Card';
import { Skeleton } from '@/components/ui/Skeleton';

import type { LayoutItem } from '../../util/constants';

type Props = {
  layout: LayoutItem['key'];
};

function GridSkeleton(): JSX.Element {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array(20)
        .fill(0)
        .map((_, index) => {
          return (
            <Card key={index} className="relative inline-block h-full w-full rounded-lg border-none">
              <div className="h-[310px] w-full">
                <Skeleton className="h-full w-full" />
              </div>
            </Card>
          );
        })}
    </div>
  );
}

function ListSkeleton(): JSX.Element {
  return (
    <div className="grid grid-cols-1 gap-4">
      {Array(12)
        .fill(0)
        .map((_, index) => {
          return (
            <Card key={index} className="flex w-full flex-row">
              <div
                className="w-100 h-100"
                style={{
                  aspectRatio: '150/200',
                }}
              >
                <Skeleton className="h-full w-full" />
              </div>

              <div className="flex-grow p-3">
                <div className="flex flex-col gap-1 pb-4">
                  <Skeleton className="h-5 w-1/3 text-lg" />
                  <Skeleton className="mb-3 h-3 w-1/4 text-sm" />
                </div>
                <div className="flex flex-col gap-1">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-full" />
                </div>
              </div>
            </Card>
          );
        })}
    </div>
  );
}

export function SearchSkeleton({ layout }: Props): JSX.Element {
  return layout === 'grid' ? <GridSkeleton /> : <ListSkeleton />;
}
