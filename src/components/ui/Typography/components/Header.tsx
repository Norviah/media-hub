import { cn } from '@/utils/cn';
import { headers } from '../utils/variants';

import type { HeaderProps } from '../types/HeaderProps';

export default function Header(props: HeaderProps): JSX.Element {
  return (
    <props.type
      {...props}
      className={cn(
        headers({
          type: props.type,
        }),
        props.className
      )}
    >
      {props.children}
    </props.type>
  );
}
