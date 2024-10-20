'use client';

import { Tags } from './Tags';
import { LayoutLink } from './ui';

import { type SearchQueriesParsed, layouts } from '../lib';

export function SearchControls(props: SearchQueriesParsed): JSX.Element {
  return (
    <div className='flex min-h-7 w-full justify-between'>
      <Tags {...props} />

      <div className='flex flex-row items-center gap-2 text-foreground-lighter'>
        {layouts.map((layout) => (
          <LayoutLink key={layout.key} item={layout} params={props.params} />
        ))}
      </div>
    </div>
  );
}
