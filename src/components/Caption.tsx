import { cn } from '@/lib/utils';

type CaptionProps = {
  /**
   * The text to display in the caption.
   */
  text: React.ReactNode;

  /**
   * Whether to display a shadow within the parent element.
   *
   * If `true`, a gradient shadow will be displayed over the parent element,
   * to the bottom of the component.
   *
   * @default true
   */
  shadow?: boolean;

  /**
   * Additional classes to apply to specific elements.
   */
  classes?: { shadow?: string; text?: string };
};

/**
 * A caption to display over an element.
 *
 * @example
 *
 * ```tsx
 * import Image from 'next/image';
 *
 * import { Caption } from '@/components';
 * import { Card } from '@/components/ui';
 *
 * export default function Home(): JSX.Element {
 *   return (
 *     <Card className='relative h-fit border-none shadow-[rgba(0,0,0,.2)_0px_4px_16px]'>
 *       <Image
 *         src='https://image.tmdb.org/t/p/original/jLE5bsPA9xOKzBWOaOmKbp1DWQS.jpg'
 *         alt='Castlevania'
 *         width={1920}
 *         height={1080}
 *         className='rounded'
 *       />
 *
 *       <Caption
 *         text='Castlevania'
 *         classes={{
 *           text: 'text-lg',
 *         }}
 *       />
 *     </Card>
 *   );
 * }
 * ```
 */
export function Caption({ text, classes, shadow = true }: CaptionProps) {
  return (
    <>
      {shadow && (
        <div
          className={cn('absolute inset-0 rounded bg-gradient-to-t from-black/50', classes?.shadow)}
        />
      )}

      <p className={cn('absolute bottom-4 px-4 font-bold text-sm text-white', classes?.text)}>
        {text}
      </p>
    </>
  );
}
