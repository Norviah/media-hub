export enum AuthParams {
  FROM = 'from',
}

export enum SearchParams {
  QUERY = 'q',
  YEAR = 'year',
  GENRES = 'genres',
  LAYOUT = 'layout',
}

export type Params = AuthParams | SearchParams;
