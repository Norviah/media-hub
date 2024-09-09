[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/movies/keywords](../README.md) / keywords

# Function: keywords()

> **keywords**(`options`): `Promise`\<[`MovieKeywords`](../../../../structs/Schemas/type-aliases/MovieKeywords.md)\>

Get a list of keywords for a movie.

## Parameters

• **options**: [`MovieKeywordsOptions`](../type-aliases/MovieKeywordsOptions.md)

Options for the request.

## Returns

`Promise`\<[`MovieKeywords`](../../../../structs/Schemas/type-aliases/MovieKeywords.md)\>

## Throws

If the rate limit is exceeded.

## Throws

If a movie with the given ID does not exist.

## Throws

If the response does not match the expected schema.

## Throws

If any other error occurs while making the request.

## See

https://developer.themoviedb.org/reference/movie-keywords

## Defined in

[src/systems/tmdb/endpoints/movies/keywords.ts:33](https://github.com/Norviah/media-hub/blob/65ee01fce9c30692d28d2f4e608ea7f18b4d7381/src/systems/tmdb/endpoints/movies/keywords.ts#L33)
