import { cn } from '@/utils/cn';
import { Loader2 as SpinnerIcon } from 'lucide-react';

import type { LucideProps } from 'lucide-react';

export default function Spinner(props: LucideProps): JSX.Element {
  return (
    <SpinnerIcon
      {...props}
      className={cn('h-4 w-4 animate-spin text-foreground', props.className)}
    />
  );
}
