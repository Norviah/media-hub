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

[src/systems/tmdb/endpoints/search/multi.ts:48](https://github.com/Norviah/media-hub/blob/65ee01fce9c30692d28d2f4e608ea7f18b4d7381/src/systems/tmdb/endpoints/search/multi.ts#L48)
