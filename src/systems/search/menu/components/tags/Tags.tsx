'use client';

import { TagsIcon } from 'lucide-react';
import { DynamicBadge } from './DynamicBadge';

import { SearchParams } from '@/utils/params';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useParsedQuery } from '../../../common/hooks';
import { baseRoute, constructUrl, defaultSortOption, routes } from '../../../common/utils';

export function Tags(): JSX.Element {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();

  const { query, year, genres, sort } = useParsedQuery();

  const tags: { onClick: () => void; text: JSX.Element }[] = [];

  if (pathname !== baseRoute.path) {
    const path = routes.find((p) => p.path === pathname);

    if (!path) {
      throw new Error('`Tags` component was not used in a valid route.');
    }

    tags.push({
      onClick: () => {
        router.push(constructUrl({ path: baseRoute.path, params: query ? params : undefined }));
      },
      text: <p>{path.title}</p>,
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

  if (genres.length > 0) {
    for (const genre of genres) {
      tags.push({
        onClick: () => {
          router.push(
            constructUrl({
              path: pathname,
              params,
              overrides: {
                [SearchParams.GENRES]: genres.filter((item) => item.id !== genre.id).map((item) => item.name.toLowerCase()),
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
      <div className="flex items-center">
        <TagsIcon className="h-5 w-5 text-muted-foreground" />
      </div>

      <div className="flex flex-row flex-wrap gap-2">
        {tags.map((tag, index) => (
          <DynamicBadge key={index} variant="default" onClick={tag.onClick}>
            {tag.text}
          </DynamicBadge>
        ))}

        {tags.length > 1 && (
          <DynamicBadge
            variant="default"
            onClick={() => {
              router.push(
                constructUrl({
                  path: pathname,
                  params,
                  overrides: {
                    [SearchParams.GENRES]: undefined,
                    [SearchParams.SORT]: undefined,
                    [SearchParams.YEAR]: undefined,
                    [SearchParams.QUERY]: undefined,
                  },
                })
              );
            }}
          >
            Clear All
          </DynamicBadge>
        )}
      </div>
    </div>
  );
}
