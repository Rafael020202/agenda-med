import { MissingParamError, NotFoundError } from '@/errors';
import { badRequest, noContent, notFound } from '@/helpers';
import { Controller, HttpResponse, ICompanyRepository } from '@/protocols';

export class UpdateCompanyController implements Controller {
  constructor(private companyRepository: ICompanyRepository) {}

  async handle(
    request: UpdateCompanyController.Request
  ): Promise<HttpResponse> {
    const required = ['id'];

    for (const field of required) {
      if (!request[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const fields = [
      'name',
      'city',
      'state_abbr',
      'address',
      'postcode',
      'latitude',
      'longitude',
      'services',
    ];
    const company = await this.companyRepository.findById(request.id);

    if (!company) {
      return notFound(new NotFoundError('company'));
    }

    const promises = [];

    for (const field of fields) {
      if (request[field] && company[field] !== request[field]) {
        promises.push(
          new Promise((resolve) =>
            resolve(
              this.companyRepository.updateAttr({
                attribute: field,
                value: request[field],
                id: request.id,
              })
            )
          )
        );
      }
    }

    await Promise.allSettled(promises);

    return noContent();
  }
}

export namespace UpdateCompanyController {
  export type Request = {
    id: string;
  };
}
