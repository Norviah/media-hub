'use client';

import { layouts } from '../../../common/utils';
import { LayoutItem } from './LayoutItem';

export function LayoutContainer(): JSX.Element {
  return (
    <div className="flex flex-row gap-2">
      {layouts.map((layout, i) => (
        <LayoutItem key={i} item={layout} />
      ))}
    </div>
  );
}
