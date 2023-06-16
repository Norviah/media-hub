import type { BlockquoteProps } from '../types/BlockquoteProps';

export default function Blockquote(props: BlockquoteProps): JSX.Element {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic" {...props}>
      {props.children}
    </blockquote>
  );
}
