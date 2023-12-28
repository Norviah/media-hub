import type { Movie, TV } from 'tmdb-ts';

export type Media = ({ type: 'movie' } & Movie) | ({ type: 'tv' } & TV);
