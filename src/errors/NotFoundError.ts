export class NotFoundError extends Error {
  private code: string;

  constructor(resource: string) {
    super('MissingParamError');

    this.code = 'NotFound';
    this.message = `${resource} not found`;
  }
}
