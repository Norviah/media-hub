import { Header } from '@/components/ui/Typography';
import { cn } from '@/utils/cn';

import type { PageTitleProps } from '../types/PageTitleProps';

export default function PageTitle(props: PageTitleProps): JSX.Element {
  const header = props.type ?? 'h2';

  return (
    <>
      <div {...props} className={cn('flex items-center justify-between', props.className)}>
        <div className="grid gap-1">
          <Header type={header}>{props.heading}</Header>
          {props.text && <p className="text-lg text-muted-foreground">{props.text}</p>}
        </div>
      </div>
    </>
  );
}
