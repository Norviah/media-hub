import useMediaQuery from '@mui/material/useMediaQuery';

import type { Theme } from '@mui/material/styles';
import type { BetweenQuery, MediaQuery } from '@/types/hooks/MediaQuery';

/**
 * Calls a media query on a specific breakpoint.
 *
 * @see https://mui.com/material-ui/react-use-media-query/#using-muis-breakpoint-helpers
 * @param args The media query arguments.
 * @returns Whether the media query matches.
 */
export function useResponsive(args: MediaQuery): boolean {
  const query = useMediaQuery((theme: Theme) => {
    return theme.breakpoints[args.query](args.start, (args as BetweenQuery).end);
  });

  return query;
}
