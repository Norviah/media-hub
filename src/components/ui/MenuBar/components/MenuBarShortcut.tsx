'use client';

import { cn } from '@/utils/cn';

const MenuBarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>): JSX.Element => {
  return (
    <span
      className={cn('ml-auto text-xs tracking-widest text-muted-foreground', className)}
      {...props}
    />
  );
};
MenuBarShortcut.displayname = 'MenuBarShortcut';

export default MenuBarShortcut;
