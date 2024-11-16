[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/tv/external-ids](../README.md) / externalIds

# Function: externalIds()

> **externalIds**(`options`): `Promise`\<[`TVShowExternalIds`](../../../../structs/Schemas/type-aliases/TVShowExternalIds.md)\>

Get a list of external IDs that have been added to a TV show.

## Parameters

• **options**: [`TVShowExternalIdsOptions`](../type-aliases/TVShowExternalIdsOptions.md)

Options for the request.

## Returns

`Promise`\<[`TVShowExternalIds`](../../../../structs/Schemas/type-aliases/TVShowExternalIds.md)\>

## Throws

If the rate limit is exceeded.

## Throws

If a TV show with the given ID does not exist.

## Throws

If the response does not match the expected schema.

## Throws

If any other error occurs while making the request.

## See

https://developer.themoviedb.org/reference/tv-series-external-ids

## Defined in

src/tmdb/endpoints/tv/external-ids.ts:33
