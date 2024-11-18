'use client';

import { QuerySelector, QuerySelectorInfo, SearchQuery } from '@/components/query';
import { Header, IconButton } from '@/components/ui';
import { SlidersHorizontalIcon } from 'lucide-react';

import { useIsMobile } from '@/hooks/useIsMobile';
import { cn } from '@/lib/utils';
import { type SearchQueriesParsed, years } from '@/sections/search';
import { useState } from 'react';

export function SearchMenu({ params, genresList, pickedGenres }: SearchQueriesParsed): JSX.Element {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className='space-y-4 md:flex md:flex-row md:gap-5'>
      <div className='flex flex-row items-end justify-end gap-3'>
        <div className='w-full space-y-2'>
          <Header type='h4'>Search</Header>

          <SearchQuery
            name='q'
            params={params}
            placeholderText='Enter a query...'
            forceReset={['sort']}
          />
        </div>

        {isMobile && (
          <IconButton
            icon={SlidersHorizontalIcon}
            onClick={() => setIsMenuActive(!isMenuActive)}
            className={cn(
              'bg-card shadow-sm transition-colors',
              isMenuActive ? 'text-card-foreground-dark' : 'text-card-foreground-light',
            )}
          />
        )}
      </div>

      {(isMobile ? isMenuActive : true) && (
        <div className='flex flex-row gap-5'>
          <div className='space-y-2'>
            <Header type={isMobile ? 'h6' : 'h4'}>Form</Header>

            <QuerySelector
              params={params}
              name='type'
              options={['movie', 'tv', 'person']}
              picked={params.type}
              multi={false}
              searchEmptyText='No media types found.'
              classes={{
                popover: 'w-40',
                button: 'w-40',
                content: 'w-40',
                scrollArea: 'h-36',
              }}
              forceReset={['genres']}
              trigger={QuerySelectorInfo}
            />
          </div>
          {(params.type === 'movie' || params.type === 'tv') && (
            <>
              <div className='space-y-2'>
                <Header type={isMobile ? 'h6' : 'h4'}>Year</Header>

                <QuerySelector
                  name='year'
                  options={years.map((year) => `${year}` as const)}
                  picked={params.year ? `${params.year}` : undefined}
                  searchEmptyText='No years found.'
                  params={params}
                  multi={false}
                  classes={{
                    button: 'w-[130px]',
                    content: 'w-[130px]',
                  }}
                  trigger={QuerySelectorInfo}
                />
              </div>

              {!params.q && (
                <>
                  <div className='space-y-2'>
                    <Header type={isMobile ? 'h6' : 'h4'}>Genres</Header>

                    <QuerySelector
                      name='genres'
                      options={genresList.map((genre) => genre.name)}
                      picked={pickedGenres.map((genre) => genre.name)}
                      searchEmptyText='No genres found.'
                      params={params}
                      multi
                      classes={{
                        button: 'w-[170px]',
                        content: 'w-[170px]',
                      }}
                      trigger={QuerySelectorInfo}
                    />
                  </div>
                </>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
