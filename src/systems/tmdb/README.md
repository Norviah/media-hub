### The Movie Database API

This directory contains a wrapper for [The Movie
Database's](https://developer.themoviedb.org/reference/intro/getting-started)
API using [Zod](https://zod.dev) for schema validation. The endpoints covered
aren't exhaustive and will be updated as needed, as only the ones used in the
project are implemented.

#### Example

`page.ts`

```ts
import { endpoints } from "@/tmdb";

export default async function Page(): Promise<JSX.Element> {
  const data = await endpoints.search.tv({
    query: 'mob psycho 100',
  });

  // do something with the data
}
```

#### Documentation

The [docs](./docs) directory contains generated markdown files documenting the
various functions for endpoints and all Zod schemas.