import type { UnorderedListProps } from '../types/UnorderedListProps';

export default function UnorderedList(props: UnorderedListProps): JSX.Element {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props}>
      {props.children}
    </ul>
  );
}
