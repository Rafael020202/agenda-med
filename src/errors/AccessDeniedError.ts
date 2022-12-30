export class AccessDeniedError extends Error {
  private code: string;

  constructor(message?: string) {
    super('AccessDeniedError');

    this.code = 'AccessDenied';
    this.message = message ?? 'Access denied';
  }
}
