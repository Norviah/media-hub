[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/tv/videos](../README.md) / videos

# Function: videos()

> **videos**(`options`): `Promise`\<[`TVShowVideos`](../../../../structs/Schemas/type-aliases/TVShowVideos.md)\>

Get the videos that belong to a TV show.

## Parameters

• **options**: [`TVShowVideosOptions`](../type-aliases/TVShowVideosOptions.md)

Options for the request.

## Returns

`Promise`\<[`TVShowVideos`](../../../../structs/Schemas/type-aliases/TVShowVideos.md)\>

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

https://developer.themoviedb.org/reference/tv-series-videos

## Defined in

[src/systems/tmdb/endpoints/tv/videos.ts:44](https://github.com/Norviah/media-hub/blob/e3dc67aa1738d9ad44e6a4419ef7e26de86e1452/src/systems/tmdb/endpoints/tv/videos.ts#L44)
