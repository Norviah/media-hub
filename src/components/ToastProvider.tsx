'use client';

import {
  ToastProvider as BaseToastProvider,
  Toast,
  ToastClose,
  ToastDescription,
  ToastTitle,
  ToastViewport,
  useToast,
} from '@/components/ui/Toast';

export function ToastProvider(): JSX.Element {
  const { toasts } = useToast();

  return (
    <BaseToastProvider swipeDirection="left">
      {toasts.map(({ id, title, description, action, ...props }) => {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </BaseToastProvider>
  );
}
