import { enqueueSnackbar } from 'notistack';

import type { VariantType } from 'notistack';
import type { ToastOptions } from '@/types/structs/ToastOptions';

export class Toast {
  /**
   *
   * @returns
   */
  private constructor() {
    return;
  }

  /**
   *
   * @param options
   */
  private static Call<T extends VariantType>(options: ToastOptions<T>) {
    enqueueSnackbar(options.message, options);
  }

  public static Success(options: Omit<ToastOptions<'success'>, 'variant'>): void {
    this.Call({ ...options, variant: 'success' });
  }

  public static Error(options: Omit<ToastOptions<'error'>, 'variant'>): void {
    this.Call({ ...options, variant: 'error' });
  }

  public static Warning(options: Omit<ToastOptions<'warning'>, 'variant'>): void {
    this.Call({ ...options, variant: 'warning' });
  }

  public static Info(options: Omit<ToastOptions<'info'>, 'variant'>): void {
    this.Call({ ...options, variant: 'info' });
  }

  public static Default(options: Omit<ToastOptions<'default'>, 'variant'>): void {
    this.Call({ ...options, variant: 'default' });
  }
}
