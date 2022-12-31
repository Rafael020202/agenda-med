export class AccessDeniedError extends Error {
  private code: string;

  constructor() {
    super('AccessDeniedError');

    this.code = 'AccessDenied';
    this.message = 'Cannot use resource';
  }
}
