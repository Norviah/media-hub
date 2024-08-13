[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/tv/details](../README.md) / details

# Function: details()

> **details**\<`AdditionalEndpoints`\>(`options`): `Promise`\<`AdditionalEndpoints` *extends* (`"keywords"` \| `"external_ids"` \| `"images"` \| `"recommendations"` \| `"videos"` \| `"aggregate_credits"`)[] ? `object` & \{ \[Key in "keywords" \| "external\_ids" \| "images" \| "recommendations" \| "videos" \| "aggregate\_credits"\]: Omit\<TypeOf\<Object\[Key\]\>, "id"\> \} : `object`\>

Get the top level details of a TV show.

## Type Parameters

• **AdditionalEndpoints** *extends* `undefined` \| (`"keywords"` \| `"external_ids"` \| `"images"` \| `"recommendations"` \| `"videos"` \| `"aggregate_credits"`)[]

## Parameters

• **options**: [`TVShowDetailsOptions`](../type-aliases/TVShowDetailsOptions.md)\<`AdditionalEndpoints`\>

Options for the request.

## Returns

`Promise`\<`AdditionalEndpoints` *extends* (`"keywords"` \| `"external_ids"` \| `"images"` \| `"recommendations"` \| `"videos"` \| `"aggregate_credits"`)[] ? `object` & \{ \[Key in "keywords" \| "external\_ids" \| "images" \| "recommendations" \| "videos" \| "aggregate\_credits"\]: Omit\<TypeOf\<Object\[Key\]\>, "id"\> \} : `object`\>

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

https://developer.themoviedb.org/reference/tv-series-details

## Defined in

[src/systems/tmdb/endpoints/tv/details.ts:66](https://github.com/Norviah/media-hub/blob/e3dc67aa1738d9ad44e6a4419ef7e26de86e1452/src/systems/tmdb/endpoints/tv/details.ts#L66)
