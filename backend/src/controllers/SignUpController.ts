import { badRequest, ok } from '@/helpers';
import {
  Controller,
  HttpResponse,
  IHashProvider,
  IUserRepository,
  IEmailValidatorProvider,
  IDocumentValidatorProvider,
} from '@/protocols';
import {
  EmailAlreadyInUserError,
  MissingParamError,
  InvalidParamError,
} from '@/errors';

export class SignUpController implements Controller {
  constructor(
    private userRepository: IUserRepository,
    private hashProvider: IHashProvider,
    private emailValidator: IEmailValidatorProvider,
    private cpfValidator: IDocumentValidatorProvider
  ) {}

  async handle(request: CreateUserController.Request): Promise<HttpResponse> {
    const required = ['name', 'email', 'password', 'document'];

    for (const field of required) {
      if (!request[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    if (!this.emailValidator.isValid(request.email)) {
      return badRequest(new InvalidParamError('email'));
    }

    if (!this.cpfValidator.isValid(request.document)) {
      return badRequest(new InvalidParamError('document'));
    }

    const userExists = await this.userRepository.findByEmail(request.email);

    if (userExists) {
      return badRequest(new EmailAlreadyInUserError());
    }

    const { email, name, document, password, is_provider } = request;
    const hashedPassword = await this.hashProvider.hash(password, 8);
    const createdUser = await this.userRepository.add({
      email,
      name,
      document,
      is_provider,
      password: hashedPassword,
    });

    delete createdUser.password;

    return ok(createdUser);
  }
}

export namespace CreateUserController {
  export type Request = {
    name: string;
    location: string;
    email: string;
    password: string;
    document: string;
    is_provider?: boolean;
  };

  export type Response = boolean;
}
