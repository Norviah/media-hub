[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/discover/tv](../README.md) / DiscoverTVShowQueries

# Type Alias: DiscoverTVShowQueries

> **DiscoverTVShowQueries**: `object`

## Type declaration

### air\_date.gte?

> `optional` **gte**: `string`

### air\_date.lte?

> `optional` **lte**: `string`

### first\_air\_date.gte?

> `optional` **gte**: `string`

### first\_air\_date.lte?

> `optional` **lte**: `string`

### first\_air\_date\_year?

> `optional` **first\_air\_date\_year**: `number`

### include\_adult?

> `optional` **include\_adult**: `boolean`

### include\_null\_first\_air\_dates?

> `optional` **include\_null\_first\_air\_dates**: `boolean`

### language?

> `optional` **language**: `Language`

### page?

> `optional` **page**: `number`

### screened\_theatrically?

> `optional` **screened\_theatrically**: `boolean`

### sort\_by?

> `optional` **sort\_by**: [`TVShowSortOption`](TVShowSortOption.md)

### timezone?

> `optional` **timezone**: `string`

### vote\_average.gte?

> `optional` **gte**: `number`

### vote\_average.lte?

> `optional` **lte**: `number`

### vote\_count.gte?

> `optional` **gte**: `number`

### vote\_count.lte?

> `optional` **lte**: `number`

### watch\_region?

> `optional` **watch\_region**: `string`

### with\_companies?

> `optional` **with\_companies**: [`AndOr`](../../types/type-aliases/AndOr.md)\<`string`\>

### with\_genres?

> `optional` **with\_genres**: [`AndOr`](../../types/type-aliases/AndOr.md)\<[`TVShowGenre`](TVShowGenre.md)\>

### with\_keywords?

> `optional` **with\_keywords**: [`AndOr`](../../types/type-aliases/AndOr.md)\<`string`\>

### with\_networks?

> `optional` **with\_networks**: `number`

### with\_origin\_country?

> `optional` **with\_origin\_country**: `string`

### with\_original\_language?

> `optional` **with\_original\_language**: `string`

### with\_runtime.gte?

> `optional` **gte**: `number`

### with\_runtime.lte?

> `optional` **lte**: `number`

### with\_status?

> `optional` **with\_status**: [`AndOr`](../../types/type-aliases/AndOr.md)\<[`TVShowStatus`](TVShowStatus.md)\>

### with\_type?

> `optional` **with\_type**: [`AndOr`](../../types/type-aliases/AndOr.md)\<[`TVShowType`](TVShowType.md)\>

### with\_watch\_monetization\_types?

> `optional` **with\_watch\_monetization\_types**: [`AndOr`](../../types/type-aliases/AndOr.md)\<[`MonetizationType`](../../utils/constants/type-aliases/MonetizationType.md)\>

### with\_watch\_providers?

> `optional` **with\_watch\_providers**: [`AndOr`](../../types/type-aliases/AndOr.md)\<`string`\>

### without\_companies?

> `optional` **without\_companies**: `string`

### without\_genres?

> `optional` **without\_genres**: [`TVShowGenre`](TVShowGenre.md)[]

### without\_keywords?

> `optional` **without\_keywords**: `string`

### without\_watch\_providers?

> `optional` **without\_watch\_providers**: `string`

## Defined in

[src/tmdb/endpoints/discover/tv.ts:74](https://github.com/Norviah/media-hub/blob/d809718af017974e095f312fcfa8bfdf58d3e3e5/src/tmdb/endpoints/discover/tv.ts#L74)
