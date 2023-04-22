import type { OptionsWithExtraProps, SnackbarMessage, VariantType } from 'notistack';

export type ToastOptions<T extends VariantType> = OptionsWithExtraProps<T> & {
  message: SnackbarMessage;
};
