export class EmailAlreadyInUserError extends Error {
  private code: string;

  constructor() {
    super('EmailAlreadyInUseError');

    this.code = 'EmailAlreadyInUse';
    this.message = 'Email already in use';
  }
}
