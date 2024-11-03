'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Skeleton } from '@/components/ui/Skeleton';
import { cn } from '@/lib/utils';
import { parseMedia } from '../../lib';

import type { Movie, PersonSearchResult, TVShow } from '@/tmdb';
import type { SkeletalProps } from '@/types';

type MediaImageCardProps = SkeletalProps<
  {
    media: Movie | TVShow | PersonSearchResult;
    className?: string;
  },
  'className'
>;

const classes = {
  height: 'lg:h-[265px] md:h-[194.033px] h-[180.7px]',
  width: 'lg:w-[185px] md:w-[135.833px]  w-[126.5px]',
};

export function MediaImageCard(props: MediaImageCardProps) {
  const parsed = !props.skeleton ? parseMedia(props.media) : undefined;

  return parsed ? (
    <Link href={parsed.path} className='group fade-in-0 animate-in'>
      <div className='relative'>
        <Image
          width={160}
          height={240}
          src={parsed.poster}
          alt={parsed.name}
          className={cn('w-full rounded object-cover', classes.height)}
        />

        <div
          className={cn(
            '-z-[1] absolute top-0 left-0 h-full w-full scale-90 rounded-sm bg-cover bg-no-repeat opacity-10 blur-2xl brightness-125 saturate-200 transition-all group-hover:opacity-90 dark:opacity-30',
          )}
          style={{ backgroundImage: `url(${parsed.poster})` }}
        />
      </div>
    </Link>

    //

    // <div className='w-full max-w-md mx-auto p-4'>
    //   <Card
    //     className={`relative overflow-hidden transition-all duration-300 ease-in-out ${
    //       isHovered ? 'scale-110 shadow-lg' : ''
    //     }`}
    //     onMouseEnter={handleMouseEnter}
    //     onMouseLeave={handleMouseLeave}
    //     onFocus={handleFocus}
    //     onBlur={handleBlur}
    //     tabIndex={0}
    //   >
    //     <img
    //       src='/placeholder.svg?height=300&width=400'
    //       alt='Placeholder image'
    //       className='w-full h-auto'
    //     />
    //     <div
    //       className={`absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-end p-4 text-white transition-opacity duration-300 ${
    //         isHovered ? 'opacity-100' : 'opacity-0'
    //       }`}
    //     >
    //       <h2 className='text-xl font-bold mb-2'>Image Title</h2>
    //       <p className='text-sm'>
    //         This is additional information about the image that appears when the card is hovered or
    //         focused. It provides context and details about the content of the image.
    //       </p>
    //     </div>
    //   </Card>
    // </div>

    //

    // <div className={cn(classes.height, classes.width)}>
    //   <Card
    //     className={`border-none relative overflow-hidden transition-all duration-300 ease-in-out ${
    //       isHovered ? 'shadow-lg z-[999] scale-125 shadow-2xl' : ''
    //     }`}
    //     onMouseEnter={handleMouseEnter}
    //     onMouseLeave={handleMouseLeave}
    //     onFocus={handleFocus}
    //     onBlur={handleBlur}
    //     tabIndex={0}
    //   >
    //     <img src={parsed.poster} alt={parsed.name} className='h-full w-full' />
    //     <div
    //       className={`absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-end p-4 text-white transition-opacity duration-300 ${
    //         isHovered ? 'opacity-100' : 'opacity-0'
    //       }`}
    //     >
    //       <h2 className='text-xl font-bold mb-2'>Image Title</h2>
    //       <p className='text-sm'>
    //         This is additional information about the image that appears when the card is hovered or
    //         focused. It provides context and details about the content of the image.
    //       </p>
    //     </div>
    //   </Card>
    // </div>

    //

    // <Card
    //   className={cn(
    //     'rounded transition-shadow hover:shadow-2xl border-none',
    //     classes.height,
    //     classes.width,
    //   )}
    // >
    //   <Image
    //     width={0}
    //     height={0}
    //     src={parsed.poster}
    //     alt={parsed.name}
    //     // className='h-[265px] w-[185px]'
    //     className='h-full w-full rounded object-cover'
    //   />
    // </Card>

    //

    // <Link href={parsed.path} className='group'>
    //   <Card className={cn(classes.height, classes.width)}>
    //     <Image
    //       width={160}
    //       height={240}
    //       src={parsed.poster}
    //       alt={parsed.name}
    //       className={cn('w-full rounded object-cover', classes.height)}
    //     />
    //   </Card>
    // </Link>
  ) : (
    <Skeleton className={cn(classes.height, 'w-full')} />
  );
}
