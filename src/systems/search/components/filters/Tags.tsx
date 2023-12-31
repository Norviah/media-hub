'use client';

import { TagsIcon } from 'lucide-react';
import { DynamicBadge } from './DynamicBadge';

import { SearchParams } from '@/utils/params';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { basePath, paths } from '../../util/constants';
import { constructUrl } from '../../util/constructUrl';
import { defaultSortOption, sortOptions } from '../../util/sort';
import { movieGenres, tvGenres } from '../../util/genres';

export function Tags(): JSX.Element {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();

  const query = params.get(SearchParams.QUERY);
  const year = params.get(SearchParams.YEAR);
  const genresParams = params.getAll(SearchParams.GENRES);
  const sortParam = params.get(SearchParams.SORT);
  const sort = sortOptions.find((item) => item.value === sortParam) || defaultSortOption;

  const tags: { onClick: () => void; text: JSX.Element }[] = [];

  if (pathname !== basePath.path) {
    const path = paths.find((p) => p.path === pathname)!;

    tags.push({
      onClick: () => {
        router.push(constructUrl({ path: basePath.path, reset: true }));
      },
      text: <>&nbsp; {path.title}</>,
    });
  }

  if (query) {
    tags.push({
      onClick: () => {
        router.push(constructUrl({ path: pathname, params, overrides: { [SearchParams.QUERY]: undefined } }));
      },
      text: (
        <>
          <span className="text-muted-foreground">Query:</span>
          &nbsp; {query}
        </>
      ),
    });
  }

  if (year) {
    tags.push({
      onClick: () => {
        router.push(constructUrl({ path: pathname, params, overrides: { [SearchParams.YEAR]: undefined } }));
      },
      text: (
        <>
          <span className="text-muted-foreground">Year:</span>
          &nbsp; {year}
        </>
      ),
    });
  }

  if (genresParams.length > 0) {
    const genresList = pathname.includes('tv') ? tvGenres : movieGenres;
    const genres = genresList.filter((genre) => genresParams.includes(genre.name.toLowerCase()));

    for (const genre of genres) {
      tags.push({
        onClick: () => {
          router.push(
            constructUrl({
              path: pathname,
              params,
              overrides: {
                [SearchParams.GENRES]: genresParams.filter((item) => item.toLowerCase() !== genre.name.toLowerCase()),
              },
            })
          );
        },
        text: (
          <>
            <span className="text-muted-foreground">Genre:</span>
            &nbsp; {genre.name}
          </>
        ),
      });
    }
  }

  if (sort && sort.value !== defaultSortOption.value) {
    tags.push({
      onClick: () => {
        router.push(constructUrl({ path: pathname, params, overrides: { [SearchParams.SORT]: undefined } }));
      },
      text: (
        <>
          <span className="text-muted-foreground">Sort:</span>
          &nbsp; {sort.fullTitle}
        </>
      ),
    });
  }

  return (
    <div className="flex flex-row gap-3">
      <TagsIcon className="h-6 w-6 text-muted-foreground" />
      {tags.map((tag, index) => (
        <DynamicBadge key={index} variant="default" onClick={tag.onClick}>
          {tag.text}
        </DynamicBadge>
      ))}
    </div>
  );
}
