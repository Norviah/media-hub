'use client';

import { CircleAlertIcon, CircleCheckIcon, InfoIcon } from 'lucide-react';
import { Toaster as BaseToastProvider } from 'sonner';

import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

type ToasterProps = React.ComponentProps<typeof BaseToastProvider>;

export function ToastProvider({ className, ...props }: ToasterProps): JSX.Element {
  const { theme = 'system' } = useTheme();

  return (
    <BaseToastProvider
      theme={theme as ToasterProps['theme']}
      className={cn('toaster group', className)}
      position='bottom-left'
      cn={cn}
      toastOptions={{
        classNames: {
          toast: 'group toast bg-card text-foreground-dark border-border shadow-lg font-normal',
          title: 'font-semibold text-foreground-dark',
          description: 'text-foreground',
          cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
      icons={{
        info: <InfoIcon className='fill-nord-blue text-background' />,
        warning: <CircleAlertIcon className='fill-nord-yellow text-background' />,
        error: <CircleAlertIcon className='fill-nord-red text-background' />,
        success: <CircleCheckIcon className='fill-nord-green text-background' />,
      }}
      {...props}
    />
  );
}
