'use client';

import Link from 'next/link';

import { DialogClose } from '@/components/ui';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

import type { Post } from 'content-collections';

export type CategoryProps = {
  category: { category: string; posts: Post[] };
  menu?: boolean;
};

export function Category({ category, menu }: CategoryProps) {
  const [, ...pathname] = usePathname().split('/').splice(1);
  const path = pathname.length === 0 ? undefined : pathname.join('/').toLowerCase();

  return category.posts.map((post) => {
    const active = post.slug === path;

    const Component = (
      <Link
        className={cn(
          'block transition-colors',
          active ? 'text-foreground-dark' : 'text-foreground hover:text-foreground-dark',
        )}
        key={post.title}
        href={`/docs/${post.slug ?? ''}`}
      >
        {post.title}
      </Link>
    );

    return menu ? (
      <DialogClose asChild key={post.title}>
        {Component}
      </DialogClose>
    ) : (
      Component
    );
  });
}
