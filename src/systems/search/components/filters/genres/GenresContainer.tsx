'use client';

import { Header } from '@/components/ui/typography/Header';
import { Genres } from './Genres';

import { basePath } from '@/systems/search/util/constants';
import { movieGenres, tvGenres } from '@/systems/search/util/genres';
import { parseParams } from '@/systems/search/util/parseParams';
import { usePathname, useSearchParams } from 'next/navigation';

export function GenresContainer(props: React.HTMLAttributes<HTMLDivElement>): JSX.Element | null {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { query } = parseParams(pathname, searchParams);

  if (pathname === basePath.path || !(query === undefined)) {
    return null;
  }

  return (
    <div {...props}>
      <Header type="h5">Genres</Header>
      <Genres genresList={pathname === '/search/tv' ? tvGenres : movieGenres} />
    </div>
  );
}
