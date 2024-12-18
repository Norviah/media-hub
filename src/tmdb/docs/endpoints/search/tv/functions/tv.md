[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/search/tv](../README.md) / tv

# Function: tv()

> **tv**(`options`): `Promise`\<[`TVShowSearchResults`](../../../../structs/Schemas/type-aliases/TVShowSearchResults.md)\>

Search for TV shows by name

## Parameters

• **options**: [`SearchTVShowOptions`](../type-aliases/SearchTVShowOptions.md)

Options for the request.

## Returns

`Promise`\<[`TVShowSearchResults`](../../../../structs/Schemas/type-aliases/TVShowSearchResults.md)\>

The response.

## Throws

If the rate limit is exceeded.

## Throws

If the response does not match the expected schema.

## Throws

If any other error occurs while making the request.

## See

https://developer.themoviedb.org/reference/search-tv

## Defined in

[src/tmdb/endpoints/search/tv.ts:60](https://github.com/Norviah/media-hub/blob/d809718af017974e095f312fcfa8bfdf58d3e3e5/src/tmdb/endpoints/search/tv.ts#L60)
