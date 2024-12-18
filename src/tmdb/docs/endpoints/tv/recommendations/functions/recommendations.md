[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/tv/recommendations](../README.md) / recommendations

# Function: recommendations()

> **recommendations**(`options`): `Promise`\<[`TVShowRecommendations`](../../../../structs/Schemas/type-aliases/TVShowRecommendations.md)\>

Get a list of recommended TV shows or movies for a TV show.

## Parameters

• **options**: [`TVShowRecommendationsOptions`](../type-aliases/TVShowRecommendationsOptions.md)

Options for the request.

## Returns

`Promise`\<[`TVShowRecommendations`](../../../../structs/Schemas/type-aliases/TVShowRecommendations.md)\>

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

https://developer.themoviedb.org/reference/tv-series-recommendations

## Defined in

[src/tmdb/endpoints/tv/recommendations.ts:44](https://github.com/Norviah/media-hub/blob/d809718af017974e095f312fcfa8bfdf58d3e3e5/src/tmdb/endpoints/tv/recommendations.ts#L44)
