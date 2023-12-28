'use client';

import { layouts } from '../../../util/constants';
import { LayoutItem } from './LayoutItem';

export function Layout(): JSX.Element {
  return (
    <>
      {layouts.map((layout, index) => (
        <LayoutItem key={index} item={layout} />
      ))}
    </>
  );
}
