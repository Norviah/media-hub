'use client';

import { TagsIcon } from 'lucide-react';
import { DynamicBadge } from './DynamicBadge';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { constructUrl } from '../../util/constructUrl';
import { basePath, paths } from '../../util/constants';

export function Tags(): JSX.Element {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();

  const query = params.get('q');
  const year = params.get('year');
  const genres = params.getAll('genres');

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
        router.push(constructUrl({ path: pathname, params, overrides: { q: undefined } }));
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
        router.push(constructUrl({ path: pathname, params, overrides: { year: undefined } }));
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
          router.push(constructUrl({ path: pathname, params, overrides: { genres: genres.filter((g) => g !== genre) } }));
        },
        text: (
          <>
            <span className="text-muted-foreground">Genre:</span>
            &nbsp; {genre}
          </>
        ),
      });
    }
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
