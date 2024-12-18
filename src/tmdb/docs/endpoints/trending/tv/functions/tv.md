[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/trending/tv](../README.md) / tv

# Function: tv()

> **tv**(`options`): `Promise`\<[`TVShowSearchResults`](../../../../structs/Schemas/type-aliases/TVShowSearchResults.md)\>

Get the trending TV shows on TMDB.

## Parameters

• **options**: [`TrendingTVShowOptions`](../type-aliases/TrendingTVShowOptions.md) = `{}`

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

https://developer.themoviedb.org/reference/trending-tv

## Defined in

[src/tmdb/endpoints/trending/tv.ts:39](https://github.com/Norviah/media-hub/blob/d809718af017974e095f312fcfa8bfdf58d3e3e5/src/tmdb/endpoints/trending/tv.ts#L39)
