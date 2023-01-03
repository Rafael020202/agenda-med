import { ok, badRequest } from '@/helpers';
import { MissingParamError } from '@/errors';
import { Controller, HttpResponse, ICompanyRepository } from '@/protocols';

export class ListCompaniesByLocationController implements Controller {
  constructor(private companyRepository: ICompanyRepository) {}

  async handle(
    request: ListCompaniesByLocationController.Request
  ): Promise<HttpResponse> {
    const required = ['latitude', 'longitude'];

    for (const field of required) {
      if (!request[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const result = await this.companyRepository.listByLagitudeAndLogitude({
      latitude: Number(request.latitude),
      longitude: Number(request.longitude),
    });

    return ok(result);
  }
}

export namespace ListCompaniesByLocationController {
  export type Request = {
    latitude: number;
    longitude: number;
  };
}
