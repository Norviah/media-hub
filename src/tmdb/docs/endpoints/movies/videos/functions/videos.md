[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/movies/videos](../README.md) / videos

# Function: videos()

> **videos**(`options`): `Promise`\<[`MovieVideos`](../../../../structs/Schemas/type-aliases/MovieVideos.md)\>

Get the videos that belong to a movie.

## Parameters

• **options**: [`MovieVideosOptions`](../type-aliases/MovieVideosOptions.md)

Options for the request.

## Returns

`Promise`\<[`MovieVideos`](../../../../structs/Schemas/type-aliases/MovieVideos.md)\>

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

https://developer.themoviedb.org/reference/movie-videos

## Defined in

[src/tmdb/endpoints/movies/videos.ts:39](https://github.com/Norviah/media-hub/blob/d809718af017974e095f312fcfa8bfdf58d3e3e5/src/tmdb/endpoints/movies/videos.ts#L39)
