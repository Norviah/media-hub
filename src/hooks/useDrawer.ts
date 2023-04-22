import { createContext, useContext } from 'react';

import type { Context } from 'react';
import type { DrawerContext as DrawerType } from '@/types/hooks/DrawerContext';

export const DrawerContext: Context<DrawerType> = createContext<DrawerType>({
  open: false,
  to: () => null,
});

export function useDrawer(): DrawerType {
  return useContext(DrawerContext);
}
