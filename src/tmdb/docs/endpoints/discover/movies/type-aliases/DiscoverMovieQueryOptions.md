[**TMDB**](../../../../README.md) • **Docs**

***

[TMDB](../../../../README.md) / [endpoints/discover/movies](../README.md) / DiscoverMovieQueryOptions

# Type Alias: DiscoverMovieQueryOptions

> **DiscoverMovieQueryOptions**: `object`

## Type declaration

### certification?

> `optional` **certification**: `string`

### certification.gte?

> `optional` **gte**: `string`

### certification.lte?

> `optional` **lte**: `string`

### certification\_country?

> `optional` **certification\_country**: `string`

### include\_adult?

> `optional` **include\_adult**: `boolean`

### include\_video?

> `optional` **include\_video**: `boolean`

### language?

> `optional` **language**: `Language`

### page?

> `optional` **page**: `number`

### primary\_release\_date.gte?

> `optional` **gte**: `string`

### primary\_release\_date.lte?

> `optional` **lte**: `string`

### primary\_release\_year?

> `optional` **primary\_release\_year**: `number`

### region?

> `optional` **region**: `string`

### release\_date.gte?

> `optional` **gte**: `string`

### release\_date.lte?

> `optional` **lte**: `string`

### sort\_by?

> `optional` **sort\_by**: [`MovieSortOption`](MovieSortOption.md)

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

### with\_cast?

> `optional` **with\_cast**: [`AndOr`](../../types/type-aliases/AndOr.md)\<`string`\>

### with\_companies?

> `optional` **with\_companies**: [`AndOr`](../../types/type-aliases/AndOr.md)\<`string`\>

### with\_crew?

> `optional` **with\_crew**: [`AndOr`](../../types/type-aliases/AndOr.md)\<`string`\>

### with\_genres?

> `optional` **with\_genres**: [`AndOr`](../../types/type-aliases/AndOr.md)\<[`MovieGenre`](MovieGenre.md)\>

### with\_keywords?

> `optional` **with\_keywords**: [`AndOr`](../../types/type-aliases/AndOr.md)\<`string`\>

### with\_origin\_country?

> `optional` **with\_origin\_country**: `string`

### with\_original\_language?

> `optional` **with\_original\_language**: `string`

### with\_people?

> `optional` **with\_people**: [`AndOr`](../../types/type-aliases/AndOr.md)\<`string`\>

### with\_release\_type?

> `optional` **with\_release\_type**: [`AndOr`](../../types/type-aliases/AndOr.md)\<[`MovieReleaseType`](MovieReleaseType.md)\>

### with\_runtime.gte?

> `optional` **gte**: `number`

### with\_runtime.lte?

> `optional` **lte**: `number`

### with\_watch\_monetization\_types?

> `optional` **with\_watch\_monetization\_types**: [`AndOr`](../../types/type-aliases/AndOr.md)\<[`MonetizationType`](../../utils/constants/type-aliases/MonetizationType.md)\>

### with\_watch\_providers?

> `optional` **with\_watch\_providers**: [`AndOr`](../../types/type-aliases/AndOr.md)\<`string`\>

### without\_companies?

> `optional` **without\_companies**: `string`

### without\_genres?

> `optional` **without\_genres**: [`MovieGenre`](MovieGenre.md)[]

### without\_keywords?

> `optional` **without\_keywords**: `string`

### without\_watch\_providers?

> `optional` **without\_watch\_providers**: `string`

### year?

> `optional` **year**: `number`

## Defined in

src/tmdb/endpoints/discover/movies.ts:67
