[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/search/movie](../README.md) / SearchMovieOptions

# Type Alias: SearchMovieOptions

> **SearchMovieOptions**: `object`

## Type declaration

### include\_adult?

> `optional` **include\_adult**: `boolean`

Whether to include adult content in the results.

### language?

> `optional` **language**: `Language`

The language to display results in.

### options?

> `optional` **options**: `RequestInit`

Any additional options to apply to the API request.

### page?

> `optional` **page**: `number`

The specific page of the results to get.

### primary\_release\_year?

> `optional` **primary\_release\_year**: `number`

The specific year of the release to get.

### query

> **query**: `string`

The name to search for.

### region?

> `optional` **region**: `string`

The specific region to get results from.

### year?

> `optional` **year**: `number`

The first air date and all episode air dates.

## Defined in

[src/tmdb/endpoints/search/movie.ts:10](https://github.com/Norviah/media-hub/blob/d809718af017974e095f312fcfa8bfdf58d3e3e5/src/tmdb/endpoints/search/movie.ts#L10)
