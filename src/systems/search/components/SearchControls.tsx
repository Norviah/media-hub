'use client';

import { SearchContext } from '../lib/context';
import { Tags } from './Tags';
import { LayoutLink } from './ui';

import { useContext } from 'react';
import { layouts } from '../lib';

export function SearchControls(): JSX.Element {
  const { params } = useContext(SearchContext);

  return (
    <div className='flex min-h-7 w-full justify-between'>
      <Tags />

      <div className='flex flex-row items-center gap-2 text-foreground-lighter'>
        {layouts.map((layout) => (
          <LayoutLink key={layout.key} item={layout} params={params} />
        ))}
      </div>
    </div>
  );
}
