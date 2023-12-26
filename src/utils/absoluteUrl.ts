import { env } from '@/utils/env';

export function absoluteUrl(path: `/${string}`): string {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`;
}
