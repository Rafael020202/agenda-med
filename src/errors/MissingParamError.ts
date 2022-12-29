export class MissingParamError extends Error {
  private code: string;

  constructor(param: string) {
    super('MissingParamError');

    this.code = 'MissingParamError';
    this.message = `${param} is required`;
  }
}
