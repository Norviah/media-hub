import Image from 'next/image';
import Link from 'next/link';

import { Blockquote } from '@/components/ui/Blockquote';
import { Card } from '@/components/ui/Card';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Header } from '@/components/ui/Header';
import { Separator } from '@/components/ui/Separator';
import { UnorderedList } from '@/components/ui/UnorderedList';
import { DynamicLink } from '../components';

import { cn } from '@/lib/utils';

import type { MDXContent } from '@content-collections/mdx/react';

export const components: Parameters<typeof MDXContent>[0]['components'] = {
  h1: ({
    className,
    ...props
  }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <Header
      type='h1'
      className={cn('mt-2 scroll-m-20 border-b first:mt-0', className)}
      {...props}
    />
  ),

  h2: ({
    className,
    ...props
  }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <Header type='h2' className={cn('mt-10 scroll-m-20 pb-1 first:mt-0', className)} {...props} />
  ),

  h3: ({
    className,
    ...props
  }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <Header type='h3' className={cn('mt-8 scroll-m-20 first:mt-0', className)} {...props} />
  ),

  h4: ({
    className,
    ...props
  }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <Header type='h4' className={cn('mt-8 scroll-m-20 first:mt-0', className)} {...props} />
  ),

  h5: ({
    className,
    ...props
  }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <Header type='h5' className={cn('mt-8 scroll-m-20 first:mt-0', className)} {...props} />
  ),

  h6: ({
    className,
    ...props
  }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <Header type='h6' className={cn('mt-8 scroll-m-20 first:mt-0', className)} {...props} />
  ),

  div: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn('text-foreground-light', className)} {...props} />
  ),

  a: ({
    href,
    ...props
  }: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => (
    <DynamicLink href={href} {...props} />
  ),

  p: ({
    className,
    ...props
  }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) => (
    <p
      className={cn('text-foreground-light leading-7 [&:not(:first-child)]:mt-6', className)}
      {...props}
    />
  ),

  ul: (
    props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>,
  ) => <UnorderedList className='text-foreground-light' {...props} />,

  blockquote: (
    props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>,
  ) => <Blockquote {...props} />,

  img: ({ className, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img className={cn('rounded-md border', className)} {...props} alt={alt} />
  ),

  hr: () => <Separator className='my-4 md:my-8' />,

  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className='my-6 w-full overflow-y-auto'>
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),

  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={cn('m-0 border-t p-0 even:bg-muted', className)} {...props} />
  ),

  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...props}
    />
  ),

  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...props}
    />
  ),

  pre: ({
    className,
    ...props
  }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => (
    <CodeBlock className='my-5 whitespace-pre-wrap p-5'>{props.children}</CodeBlock>
  ),

  code: ({
    className,
    ...props
  }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => (
    <span className='rounded bg-muted p-0.5 px-1 font-mono text-foreground-light'>
      {props.children}
    </span>
  ),

  strong: ({
    className,
    ...props
  }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => (
    <strong className={cn('text-foreground', className)} {...props} />
  ),

  codeblock: ({
    className,
    ...props
  }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => (
    <CodeBlock>{props.children}</CodeBlock>
  ),

  Image,

  Card: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <Card className={cn('my-6 p-5', className)} {...props} />
  ),

  Link,
};
