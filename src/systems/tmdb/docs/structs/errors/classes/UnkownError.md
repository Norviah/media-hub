[**TMDB**](../../../README.md) • **Docs**

***

[TMDB](../../../README.md) / [structs/errors](../README.md) / UnkownError

# Class: UnkownError

Error thrown when the API encounters an error that is not handled by the
library.

## Extends

- `Error`

## Constructors

### new UnkownError()

> **new UnkownError**(`error`): [`UnkownError`](UnkownError.md)

Initializes a new `UnkownError` instance.

#### Parameters

• **error**: `string`

The error message returned by the API.

#### Returns

[`UnkownError`](UnkownError.md)

#### Overrides

`Error.constructor`

#### Defined in

[src/systems/tmdb/structs/errors.ts:11](https://github.com/Norviah/media-hub/blob/65ee01fce9c30692d28d2f4e608ea7f18b4d7381/src/systems/tmdb/structs/errors.ts#L11)

## Properties

### cause?

> `optional` **cause**: `unknown`

#### Inherited from

`Error.cause`

#### Defined in

node\_modules/.pnpm/typescript@5.5.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:24

***

### message

> **message**: `string`

#### Inherited from

`Error.message`

#### Defined in

node\_modules/.pnpm/typescript@5.5.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

> **name**: `string`

#### Inherited from

`Error.name`

#### Defined in

node\_modules/.pnpm/typescript@5.5.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

`Error.stack`

#### Defined in

node\_modules/.pnpm/typescript@5.5.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### Parameters

• **err**: `Error`

• **stackTraces**: `CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`Error.prepareStackTrace`

#### Defined in

node\_modules/.pnpm/@types+node@20.14.11/node\_modules/@types/node/globals.d.ts:28

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

`Error.stackTraceLimit`

#### Defined in

node\_modules/.pnpm/@types+node@20.14.11/node\_modules/@types/node/globals.d.ts:30

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`

#### Defined in

node\_modules/.pnpm/@types+node@20.14.11/node\_modules/@types/node/globals.d.ts:21
