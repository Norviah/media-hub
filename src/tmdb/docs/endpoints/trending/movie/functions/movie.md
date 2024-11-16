[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/trending/movie](../README.md) / movie

# Function: movie()

> **movie**(`options`): `Promise`\<[`MovieSearchResults`](../../../../structs/Schemas/type-aliases/MovieSearchResults.md)\>

Get the trending movies on TMDB.

## Parameters

• **options**: [`TrendingMoviesOptions`](../type-aliases/TrendingMoviesOptions.md) = `{}`

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

https://developer.themoviedb.org/reference/trending-movies

## Defined in

[src/tmdb/endpoints/trending/movie.ts:39](https://github.com/Norviah/media-hub/blob/d809718af017974e095f312fcfa8bfdf58d3e3e5/src/tmdb/endpoints/trending/movie.ts#L39)
