[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/people/tv-credits](../README.md) / tvShowCredits

# Function: tvShowCredits()

> **tvShowCredits**(`options`): `Promise`\<[`PersonTVShowCredits`](../../../../structs/Schemas/type-aliases/PersonTVShowCredits.md)\>

Get the TV credits for a person.

## Parameters

• **options**: [`PersonTVShowCreditsOptions`](../type-aliases/PersonTVShowCreditsOptions.md)

Options for the request.

## Returns

`Promise`\<[`PersonTVShowCredits`](../../../../structs/Schemas/type-aliases/PersonTVShowCredits.md)\>

## Throws

If the rate limit is exceeded.

## Throws

If a person with the given ID does not exist.

## Throws

If the response does not match the expected schema.

## Throws

If any other error occurs while making the request.

## See

https://developer.themoviedb.org/reference/person-tv-credits

## Defined in

[src/systems/tmdb/endpoints/people/tv-credits.ts:39](https://github.com/Norviah/media-hub/blob/65ee01fce9c30692d28d2f4e608ea7f18b4d7381/src/systems/tmdb/endpoints/people/tv-credits.ts#L39)
