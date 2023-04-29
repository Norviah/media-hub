import type { NextRouter } from 'next/router';

export function parameter(router: NextRouter, key: string): string | null {
  const query = router.query[key];

  if (!query) {
    return null;
  }

  return Array.isArray(query) ? query[0] : query;
}
