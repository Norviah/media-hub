'use client';

import { Header } from '@/components/ui/typography/Header';
import { Genres } from './Genres';

import { basePath } from '@/systems/search/util/constants';
import { movieGenres, tvGenres } from '@/systems/search/util/genres';
import { SearchParams } from '@/utils/params';
import { usePathname, useSearchParams } from 'next/navigation';

export function GenresContainer(props: React.HTMLAttributes<HTMLDivElement>): JSX.Element | null {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const query = searchParams.get(SearchParams.QUERY);

  if (pathname === basePath.path || !(query === null)) {
    return null;
  }

  return (
    <div {...props}>
      <Header type="h5">Genres</Header>
      <Genres genres={pathname === '/search/tv' ? tvGenres : movieGenres} />
    </div>
  );
}
