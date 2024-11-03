import { Header } from '@/components/ui/Header';
import { MDXContent } from '@content-collections/mdx/react';

import { components } from '@/docs';
import { allPosts } from 'content-collections';

import type { SlugsPageProps } from '@/types';

export default function DocsPage(props: SlugsPageProps): JSX.Element {
  const post = allPosts.find((p) => p.slug === props.params.slugs?.join('/'));

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <div className='space-y-10'>
      <div className='space-y-3'>
        <Header type='h3'>{post.title}</Header>
        <div className='flex justify-between'>
          <p className='text-foreground-light'>{post.summary}</p>
        </div>
      </div>

      <div>
        <MDXContent code={post.mdx} components={components} />
      </div>
    </div>
  );
}
