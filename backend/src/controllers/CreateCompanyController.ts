import { MissingParamError } from '@/errors';
import { badRequest, ok } from '@/helpers';
import { Controller, HttpResponse, ICompanyRepository } from '@/protocols';

export class CreateCompanyController implements Controller {
  constructor(private companyRepository: ICompanyRepository) {}

  async handle(
    request: CreateCompanyController.Request
  ): Promise<HttpResponse> {
    const required = [
      'name',
      'city',
      'state_abbr',
      'address',
      'postcode',
      'latitude',
      'longitude',
      'services',
    ];

    for (const field of required) {
      if (!request[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const {
      name,
      address,
      city,
      latitude,
      longitude,
      postcode,
      services,
      state_abbr,
      userId,
    } = request;
    const company = await this.companyRepository.add({
      name,
      address,
      city,
      latitude,
      longitude,
      postcode,
      services,
      state_abbr,
      provider_id: userId,
    });

    return ok(company);
  }
}

export namespace CreateCompanyController {
  export type Request = {
    name: string;
    city: string;
    state_abbr: string;
    address: string;
    postcode: string;
    latitude: number;
    longitude: number;
    services: [];
    userId: string;
  };
}
