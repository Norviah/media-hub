[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/search/movie](../README.md) / movie

# Function: movie()

> **movie**(`options`): `Promise`\<[`MovieSearchResults`](../../../../structs/Schemas/type-aliases/MovieSearchResults.md)\>

Search for movies by name

## Parameters

• **options**: [`SearchMovieOptions`](../type-aliases/SearchMovieOptions.md)

Options for the request.

## Returns

`Promise`\<[`MovieSearchResults`](../../../../structs/Schemas/type-aliases/MovieSearchResults.md)\>

The response.

## Throws

If the rate limit is exceeded.

## Throws

If the response does not match the expected schema.

## Throws

If any other error occurs while making the request.

## See

https://developer.themoviedb.org/reference/search-movie

## Defined in

[src/tmdb/endpoints/search/movie.ts:63](https://github.com/Norviah/media-hub/blob/d809718af017974e095f312fcfa8bfdf58d3e3e5/src/tmdb/endpoints/search/movie.ts#L63)
