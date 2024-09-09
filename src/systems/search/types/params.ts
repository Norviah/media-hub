export type LayoutItemKeys = 'list' | 'grid';

export type LayoutItem = {
  slug: LayoutItemKeys | null;
  key: LayoutItemKeys;
  title: string;
};
