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

[src/tmdb/endpoints/people/tv-credits.ts:39](https://github.com/Norviah/media-hub/blob/d809718af017974e095f312fcfa8bfdf58d3e3e5/src/tmdb/endpoints/people/tv-credits.ts#L39)
