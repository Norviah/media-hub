import { z } from 'zod';

// ---
// UTILS
// ---

/**
 * Matches a string, transforming it to `null` if it is empty.
 *
 * @example
 *
 * ```ts
 * NonEmptyString.parse(true);     // throws an error
 * NonEmptyString.parse("string"); // valid - returns "string"
 * NonEmptyString.parse("");       // valid - returns null
 * ```
 */
const NonEmptyString = z.string().transform((string) => (string === '' ? null : string));

/**
 * Translates a date string to a full date string.
 *
 * TMDB's API returns dates in a format similar to `YYYY-MM-DD`. This schema
 * extends `NonEmptyString` to transform this into a full date string, i.e.
 * `Month Day, Year`.
 *
 * @example
 *
 * ```ts
 * FullDateString.parse(true);         // throws an error
 * FullDateString.parse("string");     // throws an error
 * FullDateString.parse("2022-01-01"); // valid - returns "January 1, 2022"
 * ```
 */
const FullDateString = NonEmptyString.transform((value) => {
  if (value === null) {
    return null;
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    throw new Error('Invalid date string.');
  }

  return date.toLocaleDateString('en-US', { dateStyle: 'long' });
});

// ---
// COMMON
// ---

export const Genre = z.object({
  id: z.number(),
  name: z.string(),
});

export type Genre = z.infer<typeof Genre>;

export const Image = z.object({
  aspect_ratio: z.number(),
  height: z.number(),
  iso_639_1: z.string().nullable(),
  file_path: z.string(),
  vote_average: z.number(),
  vote_count: z.number(),
  width: z.number(),
});

export type Image = z.infer<typeof Image>;

export const Images = z.object({
  id: z.number(),
  backdrops: z.array(Image),
  posters: z.array(Image),
  logos: z.array(Image),
});

export type Images = z.infer<typeof Images>;

export const Video = z.object({
  iso_639_1: z.string(),
  iso_3166_1: z.string(),
  name: z.string(),
  key: z.string(),
  site: z.string(),
  size: z.number(),
  type: z.string(),
  official: z.boolean(),
  published_at: z.string(),
  id: z.string(),
});

export type Video = z.infer<typeof Video>;

export const Videos = z.object({
  id: z.number(),
  results: z.array(Video),
});

export type Videos = z.infer<typeof Videos>;

export const ProductionCompany = z.object({
  id: z.number(),
  logo_path: z.string().nullable(),
  name: z.string(),
  origin_country: z.string(),
});

export type ProductionCompany = z.infer<typeof ProductionCompany>;

export const ProductionCountry = z.object({
  iso_3166_1: z.string(),
  name: z.string(),
});

export type ProductionCountry = z.infer<typeof ProductionCountry>;

export const SpokenLanguage = z.object({
  english_name: z.string(),
  iso_639_1: z.string(),
  name: z.string(),
});

export type SpokenLanguage = z.infer<typeof SpokenLanguage>;

export const Keyword = z.object({
  id: z.number(),
  name: z.string(),
});

export type Keyword = z.infer<typeof Keyword>;

// ---
// BASE
// ---

const BaseMedia = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  genre_ids: z.array(z.number()),
  id: z.number(),
  original_language: z.string(),
  overview: NonEmptyString.nullable(),
  popularity: z.number(),
  poster_path: z.string().nullable(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export const TVShow = BaseMedia.extend({
  origin_country: z.array(z.string()),
  original_name: z.string(),
  first_air_date: FullDateString.nullable(),
  name: z.string(),
  media_type: z.literal('tv').default('tv'),
});

export type TVShow = z.infer<typeof TVShow>;

export const Movie = BaseMedia.extend({
  original_title: z.string(),
  release_date: FullDateString.nullable(),
  title: z.string(),
  video: z.boolean(),
  media_type: z.literal('movie').default('movie'),
});

export type Movie = z.infer<typeof Movie>;

const BaseMediaDetails = BaseMedia.omit({ genre_ids: true }).extend({
  genres: z.array(Genre),
  homepage: NonEmptyString.nullable(),
  production_companies: z.array(ProductionCompany),
  production_countries: z.array(ProductionCountry),
  spoken_languages: z.array(SpokenLanguage),
  status: z.string(),
  tagline: NonEmptyString.nullable(),
});

export const Person = z.object({
  adult: z.boolean(),
  gender: z.number().nullable(),
  id: z.number(),
  known_for_department: z.string().nullish(),
  name: z.string(),
  popularity: z.number(),
  profile_path: z.string().nullable(),
  media_type: z.literal('person').default('person'),
});

export type Person = z.infer<typeof Person>;

export const AllExternalIds = z.object({
  freebase_mid: z.string().nullable(),
  freebase_id: z.string().nullable(),
  imdb_id: z.string().nullable(),
  tvrage_id: z.number().nullable(),
  wikidata_id: z.string().nullable(),
  facebook_id: z.string().nullable(),
  tvdb_id: z.number().nullable(),
  instagram_id: z.string().nullable(),
  tiktok_id: z.string().nullable(),
  twitter_id: z.string().nullable(),
  youtube_id: z.string().nullable(),
});

export type AllExternalIds = z.infer<typeof AllExternalIds>;

const Cast = z.object({
  character: z.string(),
  credit_id: z.string(),
});

const Crew = z.object({
  credit_id: z.string(),
  department: z.string(),
  job: z.string(),
});

// ---
// Search Collection
// ---

export const PersonSearchResult = Person.extend({
  original_name: z.string(),
  known_for: z.array(z.union([Movie, TVShow])),
});

export type PersonSearchResult = z.infer<typeof PersonSearchResult>;

// Movie Search Endpoint

export const MovieSearchResults = z.object({
  page: z.number(),
  results: z.array(Movie),
  total_pages: z.number(),
  total_results: z.number(),
});

export type MovieSearchResults = z.infer<typeof MovieSearchResults>;

// TV Show Search Endpoint

export const TVShowSearchResults = z.object({
  page: z.number(),
  results: z.array(TVShow),
  total_pages: z.number(),
  total_results: z.number(),
});

export type TVShowSearchResults = z.infer<typeof TVShowSearchResults>;

// Person Search Endpoint

export const PersonSearchResults = z.object({
  page: z.number(),
  results: z.array(PersonSearchResult),
  total_pages: z.number(),
  total_results: z.number(),
});

export type PersonSearchResults = z.infer<typeof PersonSearchResults>;

// Multi Search Endpoint

export const MultiSearchResults = z.object({
  page: z.number(),
  results: z.array(z.union([Movie, TVShow, PersonSearchResult])),
  total_pages: z.number(),
  total_results: z.number(),
});

export type MultiSearchResults = z.infer<typeof MultiSearchResults>;

// ---
// Trending Collection
// ---

// Trending Movies Endpoint

export const TrendingMovies = z.object({
  page: z.number(),
  results: z.array(Movie),
  total_pages: z.number(),
  total_results: z.number(),
});

export type TrendingMovies = z.infer<typeof TrendingMovies>;

// Trending TV Shows Endpoint

export const TrendingTVShows = z.object({
  page: z.number(),
  results: z.array(TVShow),
  total_pages: z.number(),
  total_results: z.number(),
});

export type TrendingTVShows = z.infer<typeof TrendingTVShows>;

// ---
// Discover Collection
// ---

// Discover Movies Endpoint

export const DiscoverMovies = z.object({
  page: z.number(),
  results: z.array(Movie),
  total_pages: z.number(),
  total_results: z.number(),
});

export type DiscoverMovies = z.infer<typeof DiscoverMovies>;

// Discover TV Shows Endpoint

export const DiscoverTVShows = z.object({
  page: z.number(),
  results: z.array(TVShow),
  total_pages: z.number(),
  total_results: z.number(),
});

export type DiscoverTVShows = z.infer<typeof DiscoverTVShows>;

// ---
// TV Series Collection
// ---

// Details Endpoint

export const CreatedBy = z.object({
  id: z.number(),
  credit_id: z.string(),
  name: z.string(),
  gender: z.number().nullable(),
  profile_path: z.string().nullable(),
});

export type CreatedBy = z.infer<typeof CreatedBy>;

export const LastEpisodeToAir = z.object({
  id: z.number(),
  name: z.string(),
  overview: NonEmptyString.nullable(),
  vote_average: z.number(),
  vote_count: z.number(),
  air_date: FullDateString,
  episode_number: z.number(),
  production_code: z.string(),
  runtime: z.number().nullable(),
  season_number: z.number(),
  show_id: z.number(),
  still_path: z.string().nullable(),
});

export type LastEpisodeToAir = z.infer<typeof LastEpisodeToAir>;

export const Network = z.object({
  id: z.number(),
  logo_path: z.string().nullable(),
  name: z.string(),
  origin_country: z.string(),
});

export type Network = z.infer<typeof Network>;

export const Season = z.object({
  air_date: FullDateString.nullable(),
  episode_count: z.number(),
  id: z.number(),
  name: z.string(),
  overview: NonEmptyString.nullable(),
  poster_path: z.string().nullable(),
  season_number: z.number(),
  vote_average: z.number(),
});

export type Season = z.infer<typeof Season>;

export const TVShowDetails = BaseMediaDetails.extend(TVShow.shape)
  .omit({ genre_ids: true })
  .extend({
    created_by: z.array(CreatedBy),
    episode_run_time: z.array(z.number()),
    in_production: z.boolean(),
    languages: z.array(z.string()),
    last_air_date: FullDateString.nullable(),
    last_episode_to_air: LastEpisodeToAir.nullable(),
    next_episode_to_air: LastEpisodeToAir.nullable(),
    networks: z.array(Network),
    number_of_episodes: z.number(),
    number_of_seasons: z.number(),
    seasons: z.array(Season),
    type: z.string(),
  });

export type TVShowDetails = z.infer<typeof TVShowDetails>;

// Aggregate Credits Endpoint

export const AggregateCastRole = Cast.extend({
  episode_count: z.number(),
});

export type AggregateCastRole = z.infer<typeof AggregateCastRole>;

export const AggregateCast = Person.extend({
  original_name: z.string(),
  roles: z.array(AggregateCastRole),
  total_episode_count: z.number(),
  order: z.number(),
});

export type AggregateCast = z.infer<typeof AggregateCast>;

export const AggregateCrewJob = Crew.omit({ department: true }).extend({
  episode_count: z.number(),
});

export type AggregateCrewJob = z.infer<typeof AggregateCrewJob>;

export const AggregateCrew = Person.extend({
  original_name: z.string(),
  jobs: z.array(AggregateCrewJob),
  department: z.string(),
  total_episode_count: z.number(),
});

export type AggregateCrew = z.infer<typeof AggregateCrew>;

export const AggregateCredits = z.object({
  cast: z.array(AggregateCast),
  crew: z.array(AggregateCrew),
  id: z.number(),
});

export type AggregateCredits = z.infer<typeof AggregateCredits>;

// Credits Endpoint

export const TVShowCast = Person.extend(Cast.shape).extend({
  original_name: z.string(),
  order: z.number(),
});

export type TVShowCast = z.infer<typeof TVShowCast>;

export const TVShowCrew = Person.extend(Crew.shape).extend({
  original_name: z.string(),
});

export type TVShowCrew = z.infer<typeof TVShowCrew>;

export const TVShowCredits = z.object({
  cast: z.array(TVShowCast),
  crew: z.array(TVShowCrew),
  id: z.number(),
});

export type TVShowCredits = z.infer<typeof TVShowCredits>;

// External IDs Endpoint

export const TVShowExternalIds = AllExternalIds
  //
  .pick({
    imdb_id: true,
    freebase_mid: true,
    freebase_id: true,
    tvdb_id: true,
    tvrage_id: true,
    wikidata_id: true,
    facebook_id: true,
    instagram_id: true,
    twitter_id: true,
  })

  .extend({
    id: z.number(),
  });

export type TVShowExternalIds = z.infer<typeof TVShowExternalIds>;

// Images Endpoint

export const TVShowImages = Images;

export type TVShowImages = z.infer<typeof TVShowImages>;

// Keywords Endpoint

export const TVShowKeywords = z.object({
  id: z.number(),
  results: z.array(Keyword),
});

export type TVShowKeywords = z.infer<typeof TVShowKeywords>;

// Recommendations Endpoint

const TVShowRecommendation = TVShow;

export type TVShowRecommendation = z.infer<typeof TVShowRecommendation>;

export const TVShowRecommendations = z.object({
  page: z.number(),
  results: z.array(TVShowRecommendation),
  total_pages: z.number(),
  total_results: z.number(),
});

export type TVShowRecommendations = z.infer<typeof TVShowRecommendations>;

// Videos Endpoint

export const TVShowVideos = Videos;

export type TVShowVideos = z.infer<typeof TVShowVideos>;

// ---
// TV Seasons Collection
// ---

export const EpisodeCrew = Person.extend(Crew.shape).extend({
  original_name: z.string(),
});

export type EpisodeCrew = z.infer<typeof EpisodeCrew>;

export const EpisodeGuestStar = Person.extend(Cast.shape).extend({
  order: z.number(),
  original_name: z.string(),
});

export type EpisodeGuestStar = z.infer<typeof EpisodeGuestStar>;

export const BasicGuestStar = z.object({
  episode_count: z.number(),
  person_id: z.string(),
  character: z.string(),
  credit_id: z.string(),
  order: z.number(),
});

export type BasicGuestStar = z.infer<typeof BasicGuestStar>;

export const BasicCrew = z.object({
  job: z.string(),
  department: z.string(),
  person_id: z.string(),
  credit_id: z.string(),
});

export type BasicCrew = z.infer<typeof BasicCrew>;

export const Episode = z.object({
  air_date: FullDateString.nullable(),
  episode_number: z.number(),
  id: z.number(),
  name: z.string(),
  overview: NonEmptyString.nullable(),
  production_code: NonEmptyString.nullable(),
  runtime: z.number().nullable(),
  season_number: z.number(),
  show_id: z.number(),
  still_path: z.string().nullable(),
  vote_average: z.number(),
  vote_count: z.number(),
  crew: z.array(z.union([EpisodeCrew, BasicCrew])),
  guest_stars: z.array(z.union([EpisodeGuestStar, BasicGuestStar])),
});

export type Episode = z.infer<typeof Episode>;

export const TVShowSeasonDetails = z.object({
  _id: z.string(),
  air_date: FullDateString.nullable(),
  episodes: z.array(Episode),
  name: z.string(),
  overview: NonEmptyString.nullable(),
  id: z.number(),
  poster_path: z.string().nullable(),
  season_number: z.number(),
  vote_average: z.number(),
});

export type TVShowSeasonDetails = z.infer<typeof TVShowSeasonDetails>;

// ---
// Movies Collection
// ---

// Details Endpoint

export const MovieCollection = z.object({
  id: z.number(),
  name: z.string(),
  poster_path: z.string().nullable(),
  backdrop_path: z.string().nullable(),
});

export type MovieCollection = z.infer<typeof MovieCollection>;

export const MovieDetails = BaseMediaDetails.extend(Movie.shape).omit({ genre_ids: true }).extend({
  belongs_to_collection: MovieCollection.nullable(),
  budget: z.number(),
  imdb_id: z.string().nullable(),
  revenue: z.number(),
  runtime: z.number(),
});

export type MovieDetails = z.infer<typeof MovieDetails>;

// Credits Endpoint

export const MovieCast = Person.extend(Cast.shape).extend({
  original_name: z.string(),
  cast_id: z.number(),
  order: z.number(),
});

export type MovieCast = z.infer<typeof MovieCast>;

export const MovieCrew = Person.extend(Crew.shape).extend({
  original_name: z.string(),
});

export type MovieCrew = z.infer<typeof MovieCrew>;

export const MovieCredits = z.object({
  id: z.number(),
  cast: z.array(MovieCast),
  crew: z.array(MovieCrew),
});

export type MovieCredits = z.infer<typeof MovieCredits>;

// External IDs Endpoint

export const MovieExternalIds = AllExternalIds
  //
  .pick({
    imdb_id: true,
    wikidata_id: true,
    facebook_id: true,
    instagram_id: true,
    twitter_id: true,
  })

  .extend({
    id: z.number(),
  });

export type MovieExternalIds = z.infer<typeof MovieExternalIds>;

// Images Endpoint

export const MovieImages = Images;

export type MovieImages = z.infer<typeof MovieImages>;

// Keywords Endpoint

export const MovieKeywords = z.object({
  keywords: z.array(Keyword),
});

export type MovieKeywords = z.infer<typeof MovieKeywords>;

// Recommendations Endpoint

export const MovieRecommendation = Movie;

export type MovieRecommendation = z.infer<typeof MovieRecommendation>;

export const MovieRecommendations = z.object({
  page: z.number(),
  results: z.array(MovieRecommendation),
  total_pages: z.number(),
  total_results: z.number(),
});

export type MovieRecommendations = z.infer<typeof MovieRecommendations>;

// Videos Endpoint

export const MovieVideos = Videos;

export type MovieVideos = z.infer<typeof MovieVideos>;

// ---
// People Collection
// ---

// Details Endpoint

export const PersonDetails = Person.extend({
  also_known_as: z.array(z.string()),
  biography: NonEmptyString.nullable(),
  birthday: z.string().nullable(),
  deathday: z.string().nullable(),
  homepage: NonEmptyString.nullable(),
  imdb_id: z.string().nullable(),
  place_of_birth: z.string().nullable(),
});

export type PersonDetails = z.infer<typeof PersonDetails>;

// Combined Credits Endpoint

export const PersonMovieCast = BaseMedia.extend(Movie.shape)
  .extend(Movie.shape)
  .extend(Cast.shape)
  .extend({
    order: z.number(),
  });

export type PersonMovieCast = z.infer<typeof PersonMovieCast>;

export const PersonTVShowCast = BaseMedia.extend(TVShow.shape).extend(Cast.shape).extend({
  episode_count: z.number(),
});

export type PersonTVShowCast = z.infer<typeof PersonTVShowCast>;

export const PersonMovieCrew = BaseMedia.extend(Movie.shape).extend(Crew.shape);

export type PersonMovieCrew = z.infer<typeof PersonMovieCrew>;

export const PersonTVShowCrew = BaseMedia.extend(TVShow.shape).extend(Crew.shape).extend({
  episode_count: z.number().nullish(),
});

export type PersonTVShowCrew = z.infer<typeof PersonTVShowCrew>;

export const PersonCombinedCredits = z.object({
  cast: z.array(z.union([PersonMovieCast, PersonTVShowCast])),
  crew: z.array(z.union([PersonMovieCrew, PersonTVShowCrew])),
  id: z.number(),
});

export type PersonCombinedCredits = z.infer<typeof PersonCombinedCredits>;

// External IDs Endpoint

export const PersonExternalIds = AllExternalIds.pick({
  freebase_mid: true,
  freebase_id: true,
  imdb_id: true,
  tvrage_id: true,
  wikidata_id: true,
  facebook_id: true,
  instagram_id: true,
  tiktok_id: true,
  twitter_id: true,
  youtube_id: true,
}).extend({
  id: z.number(),
});

export type PersonExternalIds = z.infer<typeof PersonExternalIds>;

// Images Endpoint

export const PersonImages = z.object({
  id: z.number(),
  profiles: z.array(Image),
});

export type PersonImages = z.infer<typeof PersonImages>;

// Movie Credits Endpoint

export const PersonMovieCredits = z.object({
  cast: z.array(PersonMovieCast),
  crew: z.array(PersonMovieCrew),
  id: z.number(),
});

export type PersonMovieCredits = z.infer<typeof PersonMovieCredits>;

// TV Show Credits Endpoint

export const PersonTVShowCredits = z.object({
  cast: z.array(PersonTVShowCast),
  crew: z.array(PersonTVShowCrew),
  id: z.number(),
});

export type PersonTVShowCredits = z.infer<typeof PersonTVShowCredits>;

// ---
// Genres Collection
// ---

export const Genres = z.object({
  genres: z.array(Genre),
});

export type Genres = z.infer<typeof Genres>;
