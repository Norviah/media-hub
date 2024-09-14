/**
 * Represents the different states of the search page.
 *
 * In TMDB's API, there are various endpoints for different types of results.
 * For example, there's an endpoint to discover media and a separate endpoint to
 * search for media.
 *
 * These endpoints are separate, but the search page in the application aims to
 * combine these different endpoints into a single page, this state is used to
 * determine the current state and what data to fetch.
 */
export const SearchState = {
  /**
   * The user has entered no queries and isn't searching for a specific type of
   * media.
   *
   * If the user has entered nothing, as in they just navigated to the search
   * page, the page will display both trending movies and tv shows.
   */
  TRENDING: 'Trending',

  /**
   * The user has entered a query.
   *
   * If a query is given, the page will display the results of the search.
   */
  SEARCH: 'Search',

  /**
   * The user has entered no queries but is searching for a specific form type
   * media.
   *
   * The page will instead use the discover endpoint and show additional options
   * to filter the results.
   */
  DISCOVER: 'Discover',

  /**
   * The user has entered no queries but is searching for a person.
   *
   * As there's no discover endpoint for people, the page will wait for the user
   * to enter a query.
   */
  PERSON_SEARCHING_NO_QUERY: 'Person Searching No Query',
} as const;

export type SearchState = (typeof SearchState)[keyof typeof SearchState];

/**
 * Represents the different layouts results can be displayed in.
 */
export const Layout = {
  /**
   * Results are displayed in a grid layout, showing only the poster image of
   * the media and the name.
   */
  GRID: 'grid',

  /**
   * Results are displayed in a list layout, showing the poster image along with
   * additional information such as the year the media was released.
   */
  LIST: 'list',
} as const;

export type Layout = (typeof Layout)[keyof typeof Layout];

/**
 * Represents the different types of media that is available from TMDB's API.
 */
export const MediaType = {
  MOVIE: 'movie',
  TV: 'tv',
  PERSON: 'person',
} as const;

export type MediaType = (typeof MediaType)[keyof typeof MediaType];
