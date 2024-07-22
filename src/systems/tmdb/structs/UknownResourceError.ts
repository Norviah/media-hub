export class UnknownResourceError extends Error {
  public constructor() {
    super('Resource not found');
  }
}
