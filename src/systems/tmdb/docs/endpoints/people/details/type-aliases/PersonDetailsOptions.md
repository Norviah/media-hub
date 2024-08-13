[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/people/details](../README.md) / PersonDetailsOptions

# Type Alias: PersonDetailsOptions\<PickedSchemaKeys\>

> **PersonDetailsOptions**\<`PickedSchemaKeys`\>: `object`

## Type Parameters

• **PickedSchemaKeys** *extends* `SchemaKeys`[] \| `undefined`

## Type declaration

### appendToResponse?

> `optional` **appendToResponse**: `PickedSchemaKeys`

Any additional endpoints to include in the response.

#### See

 - https://developer.themoviedb.org/reference/person-details
 - https://developer.themoviedb.org/docs/append-to-response

### id

> **id**: `number`

The ID of the person.

### language?

> `optional` **language**: `Language`

The language to display results in.

### options?

> `optional` **options**: `RequestInit`

Any additional options to apply to the API request.

## Defined in

[src/systems/tmdb/endpoints/people/details.ts:27](https://github.com/Norviah/media-hub/blob/e3dc67aa1738d9ad44e6a4419ef7e26de86e1452/src/systems/tmdb/endpoints/people/details.ts#L27)
