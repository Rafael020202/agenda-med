import { MissingParamError, NotFoundError } from '@/errors';
import { badRequest, notFound, ok } from '@/helpers';
import {
  Controller,
  HttpResponse,
  IProviderRepository,
  IServiceRepository,
} from '@/protocols';

export class CreateServiceController implements Controller {
  constructor(
    private serviceRepository: IServiceRepository,
    private providerRepository: IProviderRepository
  ) {}

  async handle(
    request: CreateServiceController.Request
  ): Promise<HttpResponse> {
    const required = ['value', 'name'];

    for (const field of required) {
      if (!request[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const provider = await this.providerRepository.findById(request.userId);

    if (!provider) {
      return notFound(new NotFoundError('provider'));
    }

    const { name, value, userId } = request;
    const service = await this.serviceRepository.add({
      name,
      provider_id: userId,
      value,
    });

    return ok(service);
  }
}

export namespace CreateServiceController {
  export type Request = {
    userId: string;
    name: string;
    value: number;
  };
}
