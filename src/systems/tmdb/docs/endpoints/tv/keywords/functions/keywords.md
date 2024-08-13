[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/tv/keywords](../README.md) / keywords

# Function: keywords()

> **keywords**(`options`): `Promise`\<[`TVShowKeywords`](../../../../structs/Schemas/type-aliases/TVShowKeywords.md)\>

Get a list of keywords for a TV Show.

## Parameters

• **options**: [`TVShowKeywordsOptions`](../type-aliases/TVShowKeywordsOptions.md)

Options for the request.

## Returns

`Promise`\<[`TVShowKeywords`](../../../../structs/Schemas/type-aliases/TVShowKeywords.md)\>

## Throws

If the rate limit is exceeded.

## Throws

If a TV show with the given ID does not exist.

## Throws

If the response does not match the expected schema.

## Throws

If any other error occurs while making the request.

## See

https://developer.themoviedb.org/reference/tv-series-keywords

## Defined in

[src/systems/tmdb/endpoints/tv/keywords.ts:33](https://github.com/Norviah/media-hub/blob/e3dc67aa1738d9ad44e6a4419ef7e26de86e1452/src/systems/tmdb/endpoints/tv/keywords.ts#L33)
