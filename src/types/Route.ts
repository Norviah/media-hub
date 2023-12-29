import type { LucideIcon } from 'lucide-react';
import type { Path } from './Path';

export interface Route {
  title: string;
  icon: LucideIcon;
  path: Path;
}
