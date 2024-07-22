export class RateLimitError extends Error {
  public constructor() {
    super('Rate limited');
  }
}
