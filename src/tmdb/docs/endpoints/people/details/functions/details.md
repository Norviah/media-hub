[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/people/details](../README.md) / details

# Function: details()

> **details**\<`AdditionalEndpoints`\>(`options`): `Promise`\<`AdditionalEndpoints` *extends* (`"external_ids"` \| `"images"` \| `"combined_credits"` \| `"movie_credits"` \| `"tv_credits"`)[] ? `object` & \{ \[Key in "external\_ids" \| "images" \| "combined\_credits" \| "movie\_credits" \| "tv\_credits"\]: Omit\<TypeOf\<Object\[Key\]\>, "id"\> \} : `object`\>

Get the top level details of a person.

## Type Parameters

• **AdditionalEndpoints** *extends* `undefined` \| (`"external_ids"` \| `"images"` \| `"combined_credits"` \| `"movie_credits"` \| `"tv_credits"`)[]

## Parameters

• **options**: [`PersonDetailsOptions`](../type-aliases/PersonDetailsOptions.md)\<`AdditionalEndpoints`\>

Options for the request.

## Returns

`Promise`\<`AdditionalEndpoints` *extends* (`"external_ids"` \| `"images"` \| `"combined_credits"` \| `"movie_credits"` \| `"tv_credits"`)[] ? `object` & \{ \[Key in "external\_ids" \| "images" \| "combined\_credits" \| "movie\_credits" \| "tv\_credits"\]: Omit\<TypeOf\<Object\[Key\]\>, "id"\> \} : `object`\>

The response.

## Throws

If the rate limit is exceeded.

## Throws

If a person with the given ID does not exist.

## Throws

If the response does not match the expected schema.

## Throws

If any other error occurs while making the request.

## See

https://developer.themoviedb.org/reference/person-details

## Defined in

src/tmdb/endpoints/people/details.ts:64
