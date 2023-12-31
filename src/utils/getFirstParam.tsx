import type { Params } from './params';

export function getFirstParam(params: Record<string, string | string[] | undefined>, key: Params): string | undefined {
  const entry = params[key];

  if (!entry) {
    return undefined;
  }

  return Array.isArray(entry) ? entry[0] : entry;
}

export function getAllParams(params: Record<string, string | string[] | undefined>, key: Params): string[] {
  const entry = params[key];

  if (!entry) {
    return [];
  }

  return Array.isArray(entry) ? entry : [entry];
}
