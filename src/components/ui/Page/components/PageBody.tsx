import type { LayoutProps } from '@/types/LayoutProps';

export default function PageBody(props: LayoutProps): JSX.Element {
  return <div className="mt-10">{props.children}</div>;
}
