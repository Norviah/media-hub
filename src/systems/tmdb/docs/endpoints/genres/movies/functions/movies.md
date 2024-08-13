[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/genres/movies](../README.md) / movies

# Function: movies()

> **movies**(`options`): `Promise`\<[`Genres`](../../../../structs/Schemas/type-aliases/Genres.md)\>

Get the list of official genres for movies.

## Parameters

• **options**: [`MovieGenresOptions`](../type-aliases/MovieGenresOptions.md)

Options for the request.

## Returns

`Promise`\<[`Genres`](../../../../structs/Schemas/type-aliases/Genres.md)\>

## Throws

If the rate limit is exceeded.

## Throws

If the response does not match the expected schema.

## Throws

If any other error occurs while making the request.

## See

https://developer.themoviedb.org/reference/genre-movie-list

## Defined in

[src/systems/tmdb/endpoints/genres/movies.ts:33](https://github.com/Norviah/media-hub/blob/e3dc67aa1738d9ad44e6a4419ef7e26de86e1452/src/systems/tmdb/endpoints/genres/movies.ts#L33)
