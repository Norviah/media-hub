[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/people/credits](../README.md) / credits

# Function: credits()

> **credits**(`options`): `Promise`\<[`PersonCombinedCredits`](../../../../structs/Schemas/type-aliases/PersonCombinedCredits.md)\>

Get the combined movie and TV credits for a person.

## Parameters

• **options**: [`PeopleCreditsOptions`](../type-aliases/PeopleCreditsOptions.md)

Options for the request.

## Returns

`Promise`\<[`PersonCombinedCredits`](../../../../structs/Schemas/type-aliases/PersonCombinedCredits.md)\>

## Throws

If the rate limit is exceeded.

## Throws

If a person with the given ID does not exist.

## Throws

If the response does not match the expected schema.

## Throws

If any other error occurs while making the request.

## See

https://developer.themoviedb.org/reference/person-combined-credits

## Defined in

src/systems/tmdb/endpoints/people/credits.ts:39
