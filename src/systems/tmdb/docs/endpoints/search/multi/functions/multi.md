[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/search/multi](../README.md) / multi

# Function: multi()

> **multi**(`options`): `Promise`\<[`MultiSearchResults`](../../../../structs/Schemas/type-aliases/MultiSearchResults.md)\>

Search for movies, TV shows, and people in a single request.

## Parameters

• **options**: [`MultiSearchOptions`](../type-aliases/MultiSearchOptions.md)

Options for the request.

## Returns

`Promise`\<[`MultiSearchResults`](../../../../structs/Schemas/type-aliases/MultiSearchResults.md)\>

The response.

## Throws

If the rate limit is exceeded.

## Throws

If the response does not match the expected schema.

## Throws

If any other error occurs while making the request.

## See

https://developer.themoviedb.org/reference/search-multi

## Defined in

[src/systems/tmdb/endpoints/search/multi.ts:48](https://github.com/Norviah/media-hub/blob/b0accce5c447ccf1a18696f3cb0baef1f5bd16be/src/systems/tmdb/endpoints/search/multi.ts#L48)
