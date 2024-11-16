[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/tv/aggregate-credits](../README.md) / aggregateCredits

# Function: aggregateCredits()

> **aggregateCredits**(`options`): `Promise`\<[`AggregateCredits`](../../../../structs/Schemas/type-aliases/AggregateCredits.md)\>

Get the aggregate credits from all seasons of a TV show.

## Parameters

• **options**: [`TVShowAggregateCreditsOptions`](../type-aliases/TVShowAggregateCreditsOptions.md)

Options for the request.

## Returns

`Promise`\<[`AggregateCredits`](../../../../structs/Schemas/type-aliases/AggregateCredits.md)\>

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

https://developer.themoviedb.org/reference/tv-series-aggregate-credits

## Defined in

[src/tmdb/endpoints/tv/aggregate-credits.ts:39](https://github.com/Norviah/media-hub/blob/d809718af017974e095f312fcfa8bfdf58d3e3e5/src/tmdb/endpoints/tv/aggregate-credits.ts#L39)