[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/people/movie-credits](../README.md) / movieCredits

# Function: movieCredits()

> **movieCredits**(`options`): `Promise`\<[`PersonMovieCredits`](../../../../structs/Schemas/type-aliases/PersonMovieCredits.md)\>

Get the movie credits for a person.

## Parameters

• **options**: [`PersonMovieCreditsOptions`](../type-aliases/PersonMovieCreditsOptions.md)

Options for the request.

## Returns

`Promise`\<[`PersonMovieCredits`](../../../../structs/Schemas/type-aliases/PersonMovieCredits.md)\>

## Throws

If the rate limit is exceeded.

## Throws

If a person with the given ID does not exist.

## Throws

If the response does not match the expected schema.

## Throws

If any other error occurs while making the request.

## See

https://developer.themoviedb.org/reference/person-movie-credits

## Defined in

[src/tmdb/endpoints/people/movie-credits.ts:39](https://github.com/Norviah/media-hub/blob/d809718af017974e095f312fcfa8bfdf58d3e3e5/src/tmdb/endpoints/people/movie-credits.ts#L39)
