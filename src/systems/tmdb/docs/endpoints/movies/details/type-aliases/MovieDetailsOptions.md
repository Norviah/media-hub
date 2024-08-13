[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/movies/details](../README.md) / MovieDetailsOptions

# Type Alias: MovieDetailsOptions\<PickedSchemaKeys\>

> **MovieDetailsOptions**\<`PickedSchemaKeys`\>: `object`

## Type Parameters

• **PickedSchemaKeys** *extends* `SchemaKeys`[] \| `undefined`

## Type declaration

### appendToResponse?

> `optional` **appendToResponse**: `PickedSchemaKeys`

Any additional endpoints to include in the response.

#### See

 - https://developer.themoviedb.org/reference/movie-details
 - https://developer.themoviedb.org/docs/append-to-response

### id

> **id**: `number`

The ID of the movie.

### language?

> `optional` **language**: `Language`

The language to display results in.

### options?

> `optional` **options**: `RequestInit`

Any additional options to apply to the API request.

## Defined in

[src/systems/tmdb/endpoints/movies/details.ts:30](https://github.com/Norviah/media-hub/blob/e3dc67aa1738d9ad44e6a4419ef7e26de86e1452/src/systems/tmdb/endpoints/movies/details.ts#L30)
