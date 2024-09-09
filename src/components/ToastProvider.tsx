'use client';

import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { Toaster as BaseToastProvider } from 'sonner';

type ToasterProps = React.ComponentProps<typeof BaseToastProvider>;

export function ToastProvider({ className, ...props }: ToasterProps): JSX.Element {
  const { theme = 'system' } = useTheme();

  return (
    <BaseToastProvider
      theme={theme as ToasterProps['theme']}
      className={cn('toaster group', className)}
      position='bottom-left'
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-card group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg font-normal',
          title: 'group-[.toast]:font-semibold',
          description: 'group-[.toast]:text-foreground-light',
          actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
      {...props}
    />
  );
}
