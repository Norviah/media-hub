[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/discover/tv](../README.md) / tv

# Function: tv()

> **tv**(`options`): `Promise`\<[`DiscoverTVShows`](../../../../structs/Schemas/type-aliases/DiscoverTVShows.md)\>

Find TV shows using various filters.

## Parameters

• **options**: [`DiscoverTVShowQueries`](../type-aliases/DiscoverTVShowQueries.md) = `{}`

Options for the request.

## Returns

`Promise`\<[`DiscoverTVShows`](../../../../structs/Schemas/type-aliases/DiscoverTVShows.md)\>

## Throws

If the rate limit is exceeded.

## Throws

If the response does not match the expected schema.

## Throws

If any other error occurs while making the request.

## See

https://developer.themoviedb.org/reference/discover-tv

## Defined in

src/systems/tmdb/endpoints/discover/tv.ts:115
