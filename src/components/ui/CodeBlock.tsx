import { CopyContentButton } from '@/components/CopyContentButton';

import { cn } from '@/lib/utils';

import type { CopyContentButtonProps } from '@/components/CopyContentButton';
import type { RequireAllOrNone } from 'type-fest';

type DivProps = JSX.IntrinsicElements['div'];

type CodeBlockBaseProps = {
  /**
   * Whether to display a copy button for the code block.
   */
  copy?: boolean;
} & CopyContentButtonProps;

export type CodeBlockProps = DivProps & RequireAllOrNone<CodeBlockBaseProps, 'copy' | 'message'>;

export function CodeBlock({
  copy,
  className,
  message,
  prompt,
  duration,
  ...props
}: CodeBlockProps): JSX.Element {
  return (
    <div
      className={cn(
        'rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold text-sm',
        copy && 'relative',
        className,
      )}
      {...props}
    >
      {props.children}

      {copy && <CopyContentButton message={message} prompt={prompt} duration={duration} />}
    </div>
  );
}
