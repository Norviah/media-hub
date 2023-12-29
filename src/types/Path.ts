import type { LinkProps } from 'next/link';
import type { UrlObject } from 'url';

export type Path = Exclude<LinkProps<unknown>['href'], UrlObject>;
