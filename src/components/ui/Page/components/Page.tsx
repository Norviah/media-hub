import { cn } from '@/utils/cn';
import type { DivProps } from '@/types/DivProps';

export default function Page(props: DivProps): JSX.Element {
  return (
    <div {...props} className={cn('relative md:ml-64', props.className)}>
      {props.children}
    </div>
  );
}
