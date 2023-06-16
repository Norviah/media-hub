import type { headers } from '../utils/variants';
import type { VariantProps } from 'class-variance-authority';

// export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof headers> {
//   asChild?: boolean;
//   loading?: boolean;
//   icon?: boolean;
// }

// export type CodeBlockProps = JSX.IntrinsicElements['code'];

type Headers = NonNullable<VariantProps<typeof headers>['type']>;
type BaseHeaderProps = JSX.IntrinsicElements[Headers];

// export type CodeBlockProps = JSX.IntrinsicElements['code'];

export interface HeaderProps extends BaseHeaderProps, VariantProps<typeof headers> {
  type: Headers;
}

// export type HeaderProps = {
//   // [K in keyof Required<VariantProps<typeof headers>>]: NonNullable<VariantProps<typeof headers>[K]>;
//   type: Headers;
// };
