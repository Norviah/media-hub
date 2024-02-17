import { Results } from './Results';

import type { Search } from 'tmdb-ts';
import type { LayoutItem, Media } from '../../common/utils';

export type ActionType = (args: any) => Promise<Search<Media> | null>;

export type SearchMediaProps<T extends ActionType> = {
  /**
   *
   */
  options: T extends (props: infer Options) => Promise<Search<Media> | null> ? Options : never;

  /**
   *
   * @param options
   * @returns
   */
  action: T;

  /**
   *
   */
  NoMediaFound: JSX.Element;

  /**
   *
   */
  layout: LayoutItem['key'];
};

export async function SearchMedia<T extends ActionType>({
  options,
  layout,
  NoMediaFound,
  action,
}: SearchMediaProps<T>): Promise<JSX.Element> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data: Search<Media> | null = await action({ ...options, page: 1 });

  if (!data || data.results.length === 0) {
    return NoMediaFound;
  }

  async function queryPage(page: number): Promise<Search<Media> | null> {
    'use server';
    return await action({ ...options, page });
  }

  return <Results initialResponse={data} layout={layout} query={queryPage} />;
}
