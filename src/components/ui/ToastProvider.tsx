'use client';

import {
  ToastProvider as BaseProvider,
  Toast,
  ToastClose,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/Toast';
import { useToast } from '@/hooks/useToast';

export function ToastProvider(): JSX.Element {
  const { toasts } = useToast();

  return (
    <BaseProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
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
    </BaseProvider>
  );
}
