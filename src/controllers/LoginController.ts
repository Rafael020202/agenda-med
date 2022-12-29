import { badRequest, ok, unauthorized } from '@/helpers';
import {
  Controller,
  HttpResponse,
  IEncrypterProvider,
  IHashProvider,
  IUserRepository,
} from '@/protocols';
import { MissingParamError } from '@/errors';

export class LoginController implements Controller {
  constructor(
    private userRepository: IUserRepository,
    private hashProvider: IHashProvider,
    private encrypterProvider: IEncrypterProvider
  ) {}

  async handle(request: LoginController.Request): Promise<HttpResponse> {
    const required = ['email', 'password'];

    for (const field of required) {
      if (!request[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const { email, password } = request;
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      return unauthorized();
    }

    const isPasswordCorrect = await this.hashProvider.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      return unauthorized();
    }

    const token = this.encrypterProvider.encrypt({ id: user.id });

    delete user.password;

    return ok({ token, user });
  }
}

export namespace LoginController {
  export type Request = {
    email: string;
    password: string;
  };
}
