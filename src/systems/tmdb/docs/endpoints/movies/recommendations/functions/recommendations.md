[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/movies/recommendations](../README.md) / recommendations

# Function: recommendations()

> **recommendations**(`options`): `Promise`\<[`MovieRecommendations`](../../../../structs/Schemas/type-aliases/MovieRecommendations.md)\>

Get the videos that belong to a movie.

## Parameters

• **options**: [`MovieRecommendationsOptions`](../type-aliases/MovieRecommendationsOptions.md)

Options for the request.

## Returns

`Promise`\<[`MovieRecommendations`](../../../../structs/Schemas/type-aliases/MovieRecommendations.md)\>

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

https://developer.themoviedb.org/reference/movie-recommendations

## Defined in

[src/systems/tmdb/endpoints/movies/recommendations.ts:39](https://github.com/Norviah/media-hub/blob/65ee01fce9c30692d28d2f4e608ea7f18b4d7381/src/systems/tmdb/endpoints/movies/recommendations.ts#L39)
