import type { Breakpoint } from '@mui/material';

export interface BaseQuery {
  query: 'up' | 'down' | 'only';
  start: Breakpoint;
}

export interface BetweenQuery {
  query: 'between';
  start: Breakpoint;
  end: Breakpoint;
}

export type MediaQuery = BaseQuery | BetweenQuery;
