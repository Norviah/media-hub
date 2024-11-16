[**TMDB**](../../../README.md) • **Docs**

***

[TMDB](../../../README.md) / [structs/errors](../README.md) / ParseError

# Class: ParseError

Error thrown when a Zod schema fails to validate a response from the API.

## Extends

- `Error`

## Constructors

### new ParseError()

> **new ParseError**(`path`): [`ParseError`](ParseError.md)

Initializes a new `ParserError` instance.

#### Parameters

• **path**: `string`

The path of the request that failed to parse.

#### Returns

[`ParseError`](ParseError.md)

#### Overrides

`Error.constructor`

#### Defined in

src/tmdb/structs/errors.ts:51

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

### path

> **path**: `string`

The path of the request that failed to parse.

#### Defined in

src/tmdb/structs/errors.ts:51

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
