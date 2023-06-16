import type { Icon } from 'lucide-react';

export interface Route {
  path: string;
  name: string;
  icon: Icon;
  auth: boolean;
}
