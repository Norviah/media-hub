export class UnkownError extends Error {
  public constructor(error: string) {
    super(`An unknown error occurred: ${error}`);
  }
}
