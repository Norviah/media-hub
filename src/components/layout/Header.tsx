import { cn } from '@/utils/cn';

export function Header(props: {
  container?: React.HTMLAttributes<HTMLElement>['className'];
  div?: React.HTMLAttributes<HTMLElement>['className'];
  children?: React.HTMLAttributes<HTMLElement>['children'];
}): JSX.Element {
  return (
    <header
      className={cn(
        'supports-backdrop-blur:bg-background/60 sticky top-0 z-40 bg-background/80 backdrop-blur',
        props.container
      )}
    >
      <div className={cn('container flex h-20 items-center py-4', props.div)}>{props.children}</div>
    </header>
  );
}
