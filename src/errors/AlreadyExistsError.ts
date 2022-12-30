export class AlreadyExistsError extends Error {
  private code: string;

  constructor(message: string) {
    super('AlreadyExistsError');

    this.code = 'AlreadyExists';
    this.message = message;
  }
}
