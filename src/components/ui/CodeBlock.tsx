import { CopyContentButton } from '@/components';

import { cn } from '@/lib/utils';

import type { CopyContentButtonProps } from '@/components';
import type { RequireAllOrNone } from 'type-fest';

type DivProps = JSX.IntrinsicElements['div'];

type CodeBlockBaseProps = {
  /**
   * Whether to display a copy button for the code block.
   */
  copy?: boolean;
} & CopyContentButtonProps;

export type CodeBlockProps = DivProps & RequireAllOrNone<CodeBlockBaseProps, 'copy' | 'content'>;

export function CodeBlock({
  copy,
  className,
  content: message,
  prompt,
  duration,
  ...props
}: CodeBlockProps): JSX.Element {
  return (
    <div
      className={cn(
        'whitespace-pre rounded border border-border bg-accent p-5 font-mono font-semibold text-sm',
        copy && 'relative',
        className,
      )}
      {...props}
    >
      {props.children}

      {copy && <CopyContentButton content={message} prompt={prompt} duration={duration} />}
    </div>
  );
}
