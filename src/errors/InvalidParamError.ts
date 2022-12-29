export class InvalidParamError extends Error {
  private code: string;

  constructor(param: string) {
    super('InvalidParamError');

    this.code = 'InvalidParamError';
    this.message = `${param} is invalid`;
  }
}
