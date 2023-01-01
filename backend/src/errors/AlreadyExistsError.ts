export class AlreadyExistsError extends Error {
  private code: string;

  constructor(resource: string) {
    super('AlreadyExistsError');

    this.code = 'AlreadyExists';
    this.message = `${resource} already exists`;
  }
}
