import { QuerySelector, QuerySelectorInfo } from '@/components/QuerySelector';
import { SearchQuery } from '@/components/SearchQuery';
import { Header } from '@/components/ui/Header';

import { type SearchQueriesParsed, years } from '@/systems/search';

export function SearchMenu({ params, genresList, pickedGenres }: SearchQueriesParsed): JSX.Element {
  return (
    <div className='flex flex-row gap-5'>
      <div className='space-y-2'>
        <Header type='h6'>Search</Header>

        <SearchQuery name='q' params={params} placeholderText='Enter a query...' />
      </div>

      <div className='space-y-2'>
        <Header type='h6'>Form</Header>

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
            <Header type='h6'>Year</Header>

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
                <Header type='h6'>Genres</Header>

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
  );
}
