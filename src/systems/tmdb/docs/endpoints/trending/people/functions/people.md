[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/trending/people](../README.md) / people

# Function: people()

> **people**(`options`): `Promise`\<[`PersonSearchResult`](../../../../structs/Schemas/type-aliases/PersonSearchResult.md)\>

Get the trending people on TMDB.

## Parameters

• **options**: [`TrendingPeopleOptions`](../type-aliases/TrendingPeopleOptions.md) = `{}`

Options for the request.

## Returns

`Promise`\<[`PersonSearchResult`](../../../../structs/Schemas/type-aliases/PersonSearchResult.md)\>

The response.

## Throws

If the rate limit is exceeded.

## Throws

If the response does not match the expected schema.

## Throws

If any other error occurs while making the request.

## See

https://developer.themoviedb.org/reference/trending-movies

## Defined in

[src/systems/tmdb/endpoints/trending/people.ts:39](https://github.com/Norviah/media-hub/blob/18a8c2edf600e1d27fc5173db1855dfb068c9a34/src/systems/tmdb/endpoints/trending/people.ts#L39)
