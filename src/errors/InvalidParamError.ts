export class InvalidParamError extends Error {
  private code: string;

  constructor(param: string) {
    super('InvalidParamError');

    this.code = 'InvalidParam';
    this.message = `${param} is invalid`;
  }
}
