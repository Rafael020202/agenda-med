import { MissingParamError } from '@/errors';
import { badRequest, ok } from '@/helpers';
import { Controller, HttpResponse, IServiceRepository } from '@/protocols';

export class CreateServiceController implements Controller {
  constructor(private serviceRepository: IServiceRepository) {}

  async handle(
    request: CreateServiceController.Request
  ): Promise<HttpResponse> {
    const required = ['provider_id', 'value', 'name'];

    for (const field of required) {
      if (!request[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const { name, provider_id, value } = request;
    const service = await this.serviceRepository.add({
      name,
      provider_id,
      value,
    });

    return ok(service);
  }
}

export namespace CreateServiceController {
  export type Request = {
    provider_id: string;
    name: string;
    value: number;
  };
}
