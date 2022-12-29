export class UnauthorizedError extends Error {
  private code: string;

  constructor() {
    super('Unauthorized');

    this.code = 'Unauthorized';
    this.message = 'Unauthorized';
  }
}
