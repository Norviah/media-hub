[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/movies/details](../README.md) / details

# Function: details()

> **details**\<`AdditionalEndpoints`\>(`options`): `Promise`\<`AdditionalEndpoints` *extends* (`"keywords"` \| `"credits"` \| `"external_ids"` \| `"images"` \| `"recommendations"` \| `"videos"`)[] ? `object` & \{ \[Key in "keywords" \| "credits" \| "external\_ids" \| "images" \| "recommendations" \| "videos"\]: Omit\<TypeOf\<Object\[Key\]\>, "id"\> \} : `object`\>

Get the top level details of a movie by ID.

## Type Parameters

• **AdditionalEndpoints** *extends* `undefined` \| (`"keywords"` \| `"credits"` \| `"external_ids"` \| `"images"` \| `"recommendations"` \| `"videos"`)[]

## Parameters

• **options**: [`MovieDetailsOptions`](../type-aliases/MovieDetailsOptions.md)\<`AdditionalEndpoints`\>

Options for the request.

## Returns

`Promise`\<`AdditionalEndpoints` *extends* (`"keywords"` \| `"credits"` \| `"external_ids"` \| `"images"` \| `"recommendations"` \| `"videos"`)[] ? `object` & \{ \[Key in "keywords" \| "credits" \| "external\_ids" \| "images" \| "recommendations" \| "videos"\]: Omit\<TypeOf\<Object\[Key\]\>, "id"\> \} : `object`\>

The response.

## Throws

If the rate limit is exceeded.

## Throws

If a movie with the given ID does not exist.

## Throws

If the response does not match the expected schema.

## Throws

If any other error occurs while making the request.

## See

https://developer.themoviedb.org/reference/movie-details

## Defined in

[src/tmdb/endpoints/movies/details.ts:67](https://github.com/Norviah/media-hub/blob/d809718af017974e095f312fcfa8bfdf58d3e3e5/src/tmdb/endpoints/movies/details.ts#L67)
