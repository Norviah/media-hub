[**TMDB**](../../../../../README.md) • **Docs**

***

[TMDB](../../../../../README.md) / [endpoints/tv/seasons/details](../README.md) / details

# Function: details()

> **details**(`options`): `Promise`\<[`TVShowSeasonDetails`](../../../../../structs/Schemas/type-aliases/TVShowSeasonDetails.md)\>

Get the details of a TV season.

## Parameters

• **options**: [`SeasonDetailsOptions`](../type-aliases/SeasonDetailsOptions.md)

Options for the request.

## Returns

`Promise`\<[`TVShowSeasonDetails`](../../../../../structs/Schemas/type-aliases/TVShowSeasonDetails.md)\>

The response.

## Throws

If the rate limit is exceeded.

## Throws

If a TV show with the given ID does not exist.

## Throws

If the response does not match the expected schema.

## Throws

If any other error occurs while making the request.

## See

https://developer.themoviedb.org/reference/tv-season-details

## Defined in

[src/tmdb/endpoints/tv/seasons/details.ts:43](https://github.com/Norviah/media-hub/blob/d809718af017974e095f312fcfa8bfdf58d3e3e5/src/tmdb/endpoints/tv/seasons/details.ts#L43)
