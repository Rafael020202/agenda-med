import { ok, badRequest } from '@/helpers';
import { MissingParamError } from '@/errors';
import { Controller, HttpResponse, IUserRepository } from '@/protocols';

export class ListProvidersByLocationController implements Controller {
  constructor(private userReposytory: IUserRepository) {}

  async handle(
    request: ListProvidersByLocationController.Request
  ): Promise<HttpResponse> {
    const required = ['latitude', 'longitude'];

    for (const field of required) {
      if (!request[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const result = await this.userReposytory.listByLagitudeAndLogitude({
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
