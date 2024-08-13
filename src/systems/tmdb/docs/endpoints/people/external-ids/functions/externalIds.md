[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/people/external-ids](../README.md) / externalIds

# Function: externalIds()

> **externalIds**(`options`): `Promise`\<[`PersonExternalIds`](../../../../structs/Schemas/type-aliases/PersonExternalIds.md)\>

Get a list of external IDs that belong to a person.

## Parameters

• **options**: [`PeopleExternalIdsOptions`](../type-aliases/PeopleExternalIdsOptions.md)

Options for the request.

## Returns

`Promise`\<[`PersonExternalIds`](../../../../structs/Schemas/type-aliases/PersonExternalIds.md)\>

## Throws

If the rate limit is exceeded.

## Throws

If a person with the given ID does not exist.

## Throws

If the response does not match the expected schema.

## Throws

If any other error occurs while making the request.

## See

https://developer.themoviedb.org/reference/person-external_ids

## Defined in

[src/systems/tmdb/endpoints/people/external-ids.ts:33](https://github.com/Norviah/media-hub/blob/e3dc67aa1738d9ad44e6a4419ef7e26de86e1452/src/systems/tmdb/endpoints/people/external-ids.ts#L33)
