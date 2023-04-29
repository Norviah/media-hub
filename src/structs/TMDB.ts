import TMDB from 'tmdb-ts';

export const tmdb = new TMDB(process.env.TMDB_API_KEY!);
