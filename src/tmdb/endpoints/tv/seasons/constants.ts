import { BASE_TV_PATH } from '../../../lib/paths';

export type SeasonSelection = {
  /**
   * The ID of the TV show.
   */
  id: number;

  /**
   * The season number.
   */
  seasonNumber: number;
};

export const BASE_SEASON = ({ id, seasonNumber }: SeasonSelection): `/${string}` => {
  return `${BASE_TV_PATH}/${id}/season/${seasonNumber}` as const;
};
