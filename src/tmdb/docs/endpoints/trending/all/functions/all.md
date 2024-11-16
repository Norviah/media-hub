[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/trending/all](../README.md) / all

# Function: all()

> **all**(`options`): `Promise`\<[`MultiSearchResults`](../../../../structs/Schemas/type-aliases/MultiSearchResults.md)\>

Get trending movies, TV shows, and people.

## Parameters

• **options**: [`TrendingOptions`](../type-aliases/TrendingOptions.md) = `{}`

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

https://developer.themoviedb.org/reference/trending-all

## Defined in

[src/tmdb/endpoints/trending/all.ts:39](https://github.com/Norviah/media-hub/blob/d809718af017974e095f312fcfa8bfdf58d3e3e5/src/tmdb/endpoints/trending/all.ts#L39)
