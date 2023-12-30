export function getFirstParam(params: Record<string, string | string[] | undefined>, key: string): string | undefined {
  const entry = params[key];

  if (!entry) {
    return undefined;
  }

  return Array.isArray(entry) ? entry[0] : entry;
}
