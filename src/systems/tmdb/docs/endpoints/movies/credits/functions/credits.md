[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/movies/credits](../README.md) / credits

# Function: credits()

> **credits**(`options`): `Promise`\<[`MovieCredits`](../../../../structs/Schemas/type-aliases/MovieCredits.md)\>

Get the credits for a movie.

## Parameters

• **options**: [`MovieCreditsOption`](../type-aliases/MovieCreditsOption.md)

Options for the request.

## Returns

`Promise`\<[`MovieCredits`](../../../../structs/Schemas/type-aliases/MovieCredits.md)\>

The response.

## Throws

If the rate limit is exceeded.

## Throws

If a movie with the given ID does not exist.

## Throws

If the response does not match the expected schema.

## Throws

If any other error occurs while making the request.

## See

https://developer.themoviedb.org/reference/movie-credits

## Defined in

[src/systems/tmdb/endpoints/movies/credits.ts:39](https://github.com/Norviah/media-hub/blob/e3dc67aa1738d9ad44e6a4419ef7e26de86e1452/src/systems/tmdb/endpoints/movies/credits.ts#L39)
