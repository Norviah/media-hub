[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/tv/credits](../README.md) / credits

# Function: credits()

> **credits**(`options`): `Promise`\<[`TVShowCredits`](../../../../structs/Schemas/type-aliases/TVShowCredits.md)\>

Get the latest season credits for a TV show.

## Parameters

• **options**: [`TVShowCreditsOptions`](../type-aliases/TVShowCreditsOptions.md)

Options for the request.

## Returns

`Promise`\<[`TVShowCredits`](../../../../structs/Schemas/type-aliases/TVShowCredits.md)\>

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

https://developer.themoviedb.org/reference/tv-series-credits

## Defined in

[src/systems/tmdb/endpoints/tv/credits.ts:39](https://github.com/Norviah/media-hub/blob/65ee01fce9c30692d28d2f4e608ea7f18b4d7381/src/systems/tmdb/endpoints/tv/credits.ts#L39)
