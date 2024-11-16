[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/movies/images](../README.md) / images

# Function: images()

> **images**(`options`): `Promise`\<[`MovieImages`](../../../../structs/Schemas/type-aliases/MovieImages.md)\>

Get the images that belong to a movie.

## Parameters

• **options**: [`MovieImagesOptions`](../type-aliases/MovieImagesOptions.md)

Options for the request.

## Returns

`Promise`\<[`MovieImages`](../../../../structs/Schemas/type-aliases/MovieImages.md)\>

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

https://developer.themoviedb.org/reference/movie-images

## Defined in

src/tmdb/endpoints/movies/images.ts:44
