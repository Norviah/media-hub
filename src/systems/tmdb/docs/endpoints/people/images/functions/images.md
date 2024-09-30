[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/people/images](../README.md) / images

# Function: images()

> **images**(`options`): `Promise`\<[`PersonImages`](../../../../structs/Schemas/type-aliases/PersonImages.md)\>

Get the profile images that belong to a person.

## Parameters

• **options**: [`PersonImagesOptions`](../type-aliases/PersonImagesOptions.md)

Options for the request.

## Returns

`Promise`\<[`PersonImages`](../../../../structs/Schemas/type-aliases/PersonImages.md)\>

## Throws

If the rate limit is exceeded.

## Throws

If a person with the given ID does not exist.

## Throws

If the response does not match the expected schema.

## Throws

If any other error occurs while making the request.

## See

https://developer.themoviedb.org/reference/person-images

## Defined in

[src/systems/tmdb/endpoints/people/images.ts:33](https://github.com/Norviah/media-hub/blob/18a8c2edf600e1d27fc5173db1855dfb068c9a34/src/systems/tmdb/endpoints/people/images.ts#L33)
