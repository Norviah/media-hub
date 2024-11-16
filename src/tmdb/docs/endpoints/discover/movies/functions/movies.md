[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/discover/movies](../README.md) / movies

# Function: movies()

> **movies**(`options`): `Promise`\<[`DiscoverMovies`](../../../../structs/Schemas/type-aliases/DiscoverMovies.md)\>

Find movies using various filters.

## Parameters

• **options**: [`DiscoverMovieQueryOptions`](../type-aliases/DiscoverMovieQueryOptions.md) = `{}`

Options for the request.

## Returns

`Promise`\<[`DiscoverMovies`](../../../../structs/Schemas/type-aliases/DiscoverMovies.md)\>

## Throws

If the rate limit is exceeded.

## Throws

If the response does not match the expected schema.

## Throws

If any other error occurs while making the request.

## See

https://developer.themoviedb.org/reference/discover-movie

## Defined in

src/tmdb/endpoints/discover/movies.ts:119
