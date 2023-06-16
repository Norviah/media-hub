import type { HeaderProps } from '@/components/ui/Typography';
import type { DivProps } from '@/types/DivProps';

export interface PageTitleProps extends DivProps {
  heading: string;
  text?: string;
  type?: HeaderProps['type'];
}
