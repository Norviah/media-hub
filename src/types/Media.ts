import type { Movie, TV } from './tmdb';

export type Media = ({ type: 'movie' } & Movie) | ({ type: 'tv' } & TV);
