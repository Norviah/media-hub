[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/movies/external-ids](../README.md) / externalIds

# Function: externalIds()

> **externalIds**(`options`): `Promise`\<[`MovieExternalIds`](../../../../structs/Schemas/type-aliases/MovieExternalIds.md)\>

Get the external ids for a movie.

## Parameters

• **options**: [`MovieExternalIdsOptions`](../type-aliases/MovieExternalIdsOptions.md)

Options for the request.

## Returns

`Promise`\<[`MovieExternalIds`](../../../../structs/Schemas/type-aliases/MovieExternalIds.md)\>

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

https://developer.themoviedb.org/reference/movie-external_ids

## Defined in

src/tmdb/endpoints/movies/external-ids.ts:33
