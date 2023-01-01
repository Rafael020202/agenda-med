export class UnauthorizedError extends Error {
  private code: string;

  constructor() {
    super('UnauthorizedError');

    this.code = 'Unauthorized';
    this.message = 'Unauthorized';
  }
}
