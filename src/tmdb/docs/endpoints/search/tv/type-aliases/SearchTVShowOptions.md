[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/search/tv](../README.md) / SearchTVShowOptions

# Type Alias: SearchTVShowOptions

> **SearchTVShowOptions**: `object`

## Type declaration

### first\_air\_date\_year?

> `optional` **first\_air\_date\_year**: `number`

Search only the first air date.

Valid values are numbers from `1000` to `9999`.

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

### query

> **query**: `string`

The name to search for.

### year?

> `optional` **year**: `number`

The first air date and all episode air dates.

## Defined in

src/tmdb/endpoints/search/tv.ts:10
