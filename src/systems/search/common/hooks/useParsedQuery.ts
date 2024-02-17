import { usePathname, useSearchParams } from 'next/navigation';
import { parseParams } from '../utils';

import type { ParsedParams } from '../utils';

export function useParsedQuery(): ParsedParams {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  return parseParams(pathname, searchParams);
}
