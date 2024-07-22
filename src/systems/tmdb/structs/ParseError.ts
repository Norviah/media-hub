export class ParseError extends Error {
  public constructor(path: string) {
    super(`Failed to parse response for path: ${path}`);
  }
}
