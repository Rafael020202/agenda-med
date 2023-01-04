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

    if (request.is_provider) {
      required.push('city');
      required.push('state_abbr');
      required.push('address');
      required.push('postcode');
      required.push('latitude');
      required.push('longitude');
    }

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

    const {
      email,
      name,
      document,
      password,
      is_provider,
      address,
      city,
      latitude,
      longitude,
      postcode,
      state_abbr,
    } = request;
    const hashedPassword = await this.hashProvider.hash(password, 8);
    const createdUser = await this.userRepository.add({
      email,
      name,
      document,
      is_provider,
      address,
      city,
      latitude,
      longitude,
      postcode,
      state_abbr,
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
    city?: string;
    state_abbr?: string;
    address?: string;
    postcode?: string;
    latitude?: number;
    longitude?: number;
  };

  export type Response = boolean;
}
