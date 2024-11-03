'use client';

import { Tags } from './Tags';
import { LayoutLink } from './ui';

import { QuerySelector, Text } from '@/components/QuerySelector';
import { Separator } from '@/components/ui/Separator';
import { SearchState, layouts, parseSortOption } from '../lib';

import type { SearchQueriesParsed } from '../lib';
import type { MovieSortOption, TVShowSortOption } from '@/tmdb/endpoints/discover';

export function SearchControls(props: SearchQueriesParsed): JSX.Element {
  const descending = props.sortOptions.filter((option) => option.includes('desc'));
  const ascending = props.sortOptions.filter((option) => option.includes('asc'));

  return (
    <div className='flex min-h-7 w-full justify-between'>
      <Tags {...props} />

      <div className='flex flex-row items-center gap-3'>
        {props.state === SearchState.DISCOVER && (
          <>
            <QuerySelector
              params={props.params}
              name='sort'
              sections={[
                { title: 'Descending', options: descending },
                { title: 'Ascending', options: ascending },
              ]}
              picked={props.sortOption}
              multi={false}
              arrow
              classes={{
                content: 'w-[190px]',
              }}
              searchEmptyText='No sort options found'
              renderTrigger={(string) =>
                parseSortOption(string as MovieSortOption | TVShowSortOption).name
              }
              renderOption={(string) =>
                parseSortOption(string as MovieSortOption | TVShowSortOption).name
              }
              trigger={Text}
            />

            <Separator orientation='vertical' className='h-full w-0.5 rounded' />
          </>
        )}

        <div className='flex flex-row items-center gap-2 text-foreground-light'>
          {layouts.map((layout) => (
            <LayoutLink key={layout.key} item={layout} params={props.params} />
          ))}
        </div>
      </div>
    </div>
  );
}
