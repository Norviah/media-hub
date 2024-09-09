import { LayoutLink } from '../ui/LayoutLink';
import { Tags } from './Tags';

import { layouts } from '../../lib';

import type { SearchParamsSchema } from '../../lib';

export type SearchControlsProps = {
  params: SearchParamsSchema;
};

export function SearchControls({ params }: SearchControlsProps): JSX.Element {
  return (
    <div className='flex w-full justify-between'>
      <Tags params={params} />

      <div className='flex flex-row items-center gap-2 text-foreground-lighter'>
        {layouts.map((layout) => (
          <LayoutLink key={layout.key} item={layout} params={params} />
        ))}
      </div>
    </div>
  );
}
