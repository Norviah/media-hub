import { cn } from '@/utils/cn';

export function PageHeader(props: {
  classes?: {
    container?: React.HTMLAttributes<HTMLElement>['className'];
    div?: React.HTMLAttributes<HTMLElement>['className'];
  };
  children: JSX.Element | JSX.Element[];
}): JSX.Element {
  return (
    <header
      className={cn(
        'supports-backdrop-blur:bg-background/60 sticky inset-x-0 top-0 z-40 bg-background/80 backdrop-blur',
        props.classes?.container
      )}
    >
      {props.children}
    </header>
  );
}
