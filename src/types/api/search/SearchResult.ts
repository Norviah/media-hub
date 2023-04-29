import type { MovieDetails, PersonDetail, Search, TvShowDetails } from 'tmdb-ts';

export type MovieMultiDetails = MovieDetails & { media_type: 'movie' };
export type TvShowMultiDetails = TvShowDetails & { media_type: 'tv' };
export type PersonMultiDetails = PersonDetail & { media_type: 'person' };

export type SearchResult = Search<MovieMultiDetails | TvShowMultiDetails | PersonMultiDetails>;
