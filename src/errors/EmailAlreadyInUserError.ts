export class EmailAlreadyInUserError extends Error {
  private code: string;

  constructor() {
    super('EmailAlreadyInUseError');

    this.code = 'EmailAlreadyInUseError';
    this.message = 'Email already in use';
  }
}
