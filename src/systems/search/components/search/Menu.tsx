import { QuerySelector } from '@/components/QuerySelector';
import { SearchQuery } from '@/components/SearchQuery';
import { Header } from '@/components/ui/Header';

import type { SearchParamsSchema } from '@/systems/search';

const currentYear = new Date().getFullYear() + 2;
const years = Array.from({ length: currentYear - 1900 + 1 }, (_, index) => currentYear - index);

export type SearchMenuProps = {
  params: SearchParamsSchema;
};

export function SearchMenu({ params }: SearchMenuProps): JSX.Element {
  return (
    <div className='flex flex-row gap-5'>
      <div className='space-y-2'>
        <Header type='h6'>Search</Header>

        <SearchQuery name='q' params={params} placeholderText='Enter a query...' />
      </div>

      <div className='space-y-2'>
        <Header type='h6'>Format</Header>

        <QuerySelector
          name='type'
          options={['movie', 'tv', 'person']}
          picked={params.type}
          searchEmptyText='No media types found.'
          params={params}
          multi={false}
          buttonClassName='w-[130px]'
          popoverContentClassName='w-[130px]'
          scrollAreaClassName='h-fit'
        />
      </div>

      {(params.type === 'movie' || params.type === 'tv') && (
        <>
          <div className='space-y-2'>
            <Header type='h6'>Year</Header>

            <QuerySelector
              name='year'
              options={years.map((year) => year.toString())}
              picked={params.year?.toString()}
              searchEmptyText='No years found.'
              params={params}
              multi={false}
              buttonClassName='w-[130px]'
              popoverContentClassName='w-[130px]'
            />
          </div>

          {/* <div className='space-y-2'>
            <Header type='h6'>Genres</Header>

            <QuerySelector
              name='genres'
              options={genresList.map((genre) => genre.name)}
              picked={parsedParams.genres.map((genre) => genre.name)}
              searchEmptyText='No genres found.'
              params={params}
              multi
              buttonClassName='min-w-[170px]'
              popoverContentClassName='w-[170px]'
            />
          </div> */}
        </>
      )}
    </div>
  );
}
