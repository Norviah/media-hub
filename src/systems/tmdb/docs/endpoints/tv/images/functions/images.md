[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/tv/images](../README.md) / images

# Function: images()

> **images**(`options`): `Promise`\<[`TVShowImages`](../../../../structs/Schemas/type-aliases/TVShowImages.md)\>

Get the images that belong to a TV series.

## Parameters

• **options**: [`TVShowImagesOptions`](../type-aliases/TVShowImagesOptions.md)

Options for the request.

## Returns

`Promise`\<[`TVShowImages`](../../../../structs/Schemas/type-aliases/TVShowImages.md)\>

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

https://developer.themoviedb.org/reference/tv-series-images

## Defined in

[src/systems/tmdb/endpoints/tv/images.ts:44](https://github.com/Norviah/media-hub/blob/18a8c2edf600e1d27fc5173db1855dfb068c9a34/src/systems/tmdb/endpoints/tv/images.ts#L44)
