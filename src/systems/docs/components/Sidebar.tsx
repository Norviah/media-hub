import { Category } from './SidebarCategory';

import { cn } from '@/lib/utils';
import { allPosts } from 'content-collections';

import type { Post } from 'content-collections';

export type DocumentationSidebarProps = React.HTMLAttributes<HTMLDivElement> & { menu?: boolean };

export function DocumentationSidebar({
  className,
  menu,
  ...props
}: DocumentationSidebarProps): JSX.Element {
  const categories: { category: string; posts: Post[] }[] = [];

  for (const post of allPosts) {
    const category =
      post._meta.directory === '.' ? 'root' : post._meta.directory.replace(/-/g, ' ');
    const existingCategory = categories.find((c) => c.category === category);

    if (existingCategory) {
      existingCategory.posts.push(post);
    } else {
      categories.push({ category, posts: [post] });
    }
  }

  return (
    <div
      className={cn('sticky flex h-screen flex-col gap-3 space-y-9 capitalize', className)}
      {...props}
    >
      {categories.map((category) => (
        <div key={category.category} className='space-y-3 text-sm'>
          <div className='mb-2 flex space-x-3 font-normal'>
            <span className='w-full text-foreground-lighter'>{category.category}</span>
          </div>

          <div className='space-y-2'>
            <Category key={category.category} category={category} menu={menu} />
          </div>
        </div>
      ))}
    </div>
  );
}
