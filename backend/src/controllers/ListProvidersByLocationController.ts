import { ok, badRequest } from '@/helpers';
import { MissingParamError } from '@/errors';
import { Controller, HttpResponse, IProviderRepository } from '@/protocols';

export class ListProvidersByLocationController implements Controller {
  constructor(private providerRepository: IProviderRepository) {}

  async handle(
    request: ListProvidersByLocationController.Request
  ): Promise<HttpResponse> {
    const required = ['latitude', 'longitude'];

    for (const field of required) {
      if (!request[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const result = await this.providerRepository.listByLocation({
      latitude: Number(request.latitude),
      longitude: Number(request.longitude),
    });

    return ok(result);
  }
}

export namespace ListProvidersByLocationController {
  export type Request = {
    latitude: number;
    longitude: number;
  };
}
