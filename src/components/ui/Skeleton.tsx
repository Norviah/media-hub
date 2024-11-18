import { cn } from '@/lib/utils';

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * The classes to apply to the element.
   */
  className?: string;

  /**
   * The type of animation to use.
   */
  type?: 'shimmer' | 'pulse';
};

/**
 * A skeleton placeholder for content while loading.
 *
 * Using a skeleton while loading content helps maintain layout integrity and
 * enhances user experience by telling the user that content is being loaded.
 *
 * @example
 *
 * ```tsx
 * import { Skeleton } from '@/components/ui';
 * import { Suspense } from 'react';
 *
 * async function GetData() {
 *   const data = await ...;
 *
 *   return (
 *     /* Display the data *\/
 *   );
 * }
 *
 * export default function Page() {
 *   return (
 *     <Suspense fallback={<Skeleton />}>
 *       <GetData />
 *     </Suspense>
 *   );
 * }
 * ```
 */
export function Skeleton({ className, type = 'shimmer', ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        type === 'pulse'
          ? 'animate-pulse'
          : 'before:-translate-x-full relative space-y-5 overflow-hidden rounded bg-muted before:absolute before:inset-0 before:animate-[shimmer_2s_infinite] before:border-rose-100/10 before:border-t before:bg-gradient-to-r before:from-transparent before:via-background before:to-transparent',
        'border border-border',
        className,
      )}
      {...props}
    />
  );
}
