import { cn } from '@/utils/cn';
import type { PageHeaderProps } from '../types/PageHeaderProps';

export default function PageHeader(props: PageHeaderProps): JSX.Element {
  return (
    <header
      {...props}
      className={cn(
        'supports-backdrop-blur:bg-background/60 sticky top-0 z-40 bg-background/80 backdrop-blur',
        props.className
      )}
    >
      <div className="container flex h-28 items-center">{props.children}</div>
    </header>
  );
}
