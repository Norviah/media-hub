import { Separator } from '@/components/ui/Separator';
import { Guard } from './Guard';
import { Sort } from './Sort';
import { LayoutContainer } from './layout/LayoutContainer';
import { Tags } from './tags/Tags';

export function SearchControls(): JSX.Element {
  return (
    <div className="flex flex-row justify-between gap-5">
      <Tags />

      <div className="flex flex-row items-center gap-3">
        <Guard queries={['query']}>
          <Sort />
          <Separator orientation="vertical" />
        </Guard>

        <LayoutContainer />
      </div>
    </div>
  );
}
