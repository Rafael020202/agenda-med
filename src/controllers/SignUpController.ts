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
    private cpfValidator: IDocumentValidatorProvider,
    private crmValidator: IDocumentValidatorProvider
  ) {}

  async handle(request: CreateUserController.Request): Promise<HttpResponse> {
    const required = [
      'name',
      'email',
      'password',
      'document',
      'latitude',
      'longitude',
    ];

    if (request.is_doctor) {
      required.push('specialty');
      required.push('appointment_value');
    }

    for (const field of required) {
      if (!request[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    if (!this.emailValidator.isValid(request.email)) {
      return badRequest(new InvalidParamError('email'));
    }

    if (
      !(
        request.is_doctor && (await this.crmValidator.isValid(request.document))
      ) &&
      !this.cpfValidator.isValid(request.document)
    ) {
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
      is_doctor,
      latitude,
      longitude,
      specialty,
      appointment_value,
    } = request;
    const hashedPassword = await this.hashProvider.hash(password, 8);
    const createdUser = await this.userRepository.add({
      email,
      name,
      document,
      is_doctor,
      latitude,
      longitude,
      specialty,
      appointment_value,
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
    latitude: number;
    longitude: number;
    is_doctor: boolean;
    specialty: string;
    appointment_value: number;
  };

  export type Response = boolean;
}
