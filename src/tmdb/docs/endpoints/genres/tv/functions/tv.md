[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/genres/tv](../README.md) / tv

# Function: tv()

> **tv**(`options`): `Promise`\<[`Genres`](../../../../structs/Schemas/type-aliases/Genres.md)\>

Get the list of official genres for tv.

## Parameters

• **options**: [`TVShowGenresOptions`](../type-aliases/TVShowGenresOptions.md)

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

[src/tmdb/endpoints/genres/tv.ts:33](https://github.com/Norviah/media-hub/blob/d809718af017974e095f312fcfa8bfdf58d3e3e5/src/tmdb/endpoints/genres/tv.ts#L33)
