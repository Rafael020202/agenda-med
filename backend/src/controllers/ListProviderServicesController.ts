import { MissingParamError } from '@/errors';
import { badRequest, ok } from '@/helpers';
import { Controller, HttpResponse, IServiceRepository } from '@/protocols';

export class ListProviderServicesController implements Controller {
  constructor(private serviceRepository: IServiceRepository) {}

  async handle(
    request: ListProviderServicesController.Request
  ): Promise<HttpResponse> {
    const required = ['provider_id'];

    for (const field of required) {
      if (!request[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const services = await this.serviceRepository.listByProviderId(
      request.provider_id
    );

    return ok(services);
  }
}

export namespace ListProviderServicesController {
  export type Request = {
    provider_id: string;
  };
}
