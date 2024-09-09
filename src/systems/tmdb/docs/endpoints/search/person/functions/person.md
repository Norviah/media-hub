[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/search/person](../README.md) / person

# Function: person()

> **person**(`options`): `Promise`\<[`PersonSearchResults`](../../../../structs/Schemas/type-aliases/PersonSearchResults.md)\>

For for people by either name or known-as names.

## Parameters

• **options**: [`SearchPersonOptions`](../type-aliases/SearchPersonOptions.md)

Options for the request.

## Returns

`Promise`\<[`PersonSearchResults`](../../../../structs/Schemas/type-aliases/PersonSearchResults.md)\>

The response.

## Throws

If the rate limit is exceeded.

## Throws

If the response does not match the expected schema.

## Throws

If any other error occurs while making the request.

## See

https://developer.themoviedb.org/reference/search-person

## Defined in

[src/systems/tmdb/endpoints/search/person.ts:48](https://github.com/Norviah/media-hub/blob/65ee01fce9c30692d28d2f4e608ea7f18b4d7381/src/systems/tmdb/endpoints/search/person.ts#L48)
