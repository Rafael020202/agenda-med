import { AccessDeniedError } from '@/errors';
import { badRequest, ok } from '@/helpers';
import { Middleware, HttpResponse, IDecrypterProvider } from '@/protocols';

export class AuthMiddleware implements Middleware {
  constructor(private decrypter: IDecrypterProvider) {}

  async handle(httpRequest: AuthMiddleware.Request): Promise<HttpResponse> {
    try {
      const { authorization } = httpRequest;
      const [, token] = authorization.split(' ');
      const decryptedToken = await this.decrypter.decrypt(token);

      return ok({ userId: decryptedToken.id });
    } catch (error) {
      console.log('could not read token', error);

      return badRequest(new AccessDeniedError());
    }
  }
}

export namespace AuthMiddleware {
  export type Request = {
    authorization: string;
  };
}
