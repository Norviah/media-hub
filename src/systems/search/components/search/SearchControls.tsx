import { LayoutLink } from '../ui/LayoutLink';
import { Tags } from './Tags';

import { layouts } from '../../lib';

import type { Genre } from '@/systems/tmdb';
import type { SearchParamsSchema } from '../../lib';

export type SearchControlsProps = {
  params: SearchParamsSchema;
  genres: Genre[];
};

export function SearchControls({ params, genres }: SearchControlsProps): JSX.Element {
  return (
    <div className='flex min-h-7 w-full justify-between'>
      <Tags params={params} genres={genres} />

      <div className='flex flex-row items-center gap-2 text-foreground-lighter'>
        {layouts.map((layout) => (
          <LayoutLink key={layout.key} item={layout} params={params} />
        ))}
      </div>
    </div>
  );
}
