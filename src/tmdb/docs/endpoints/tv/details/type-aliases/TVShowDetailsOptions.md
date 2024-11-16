[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/tv/details](../README.md) / TVShowDetailsOptions

# Type Alias: TVShowDetailsOptions\<PickedSchemaKeys\>

> **TVShowDetailsOptions**\<`PickedSchemaKeys`\>: `object`

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

The ID of the TV show.

### language?

> `optional` **language**: `Language`

The language to display results in.

### options?

> `optional` **options**: `RequestInit`

Any additional options to apply to the API request.

## Defined in

[src/tmdb/endpoints/tv/details.ts:29](https://github.com/Norviah/media-hub/blob/d809718af017974e095f312fcfa8bfdf58d3e3e5/src/tmdb/endpoints/tv/details.ts#L29)
