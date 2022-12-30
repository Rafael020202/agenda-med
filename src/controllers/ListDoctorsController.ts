import { ok, badRequest } from '@/helpers';
import { MissingParamError } from '@/errors';
import { Controller, HttpResponse, IUserRepository } from '@/protocols';

export class ListDoctorsController implements Controller {
  constructor(private userRepository: IUserRepository) {}

  async handle(request: ListDoctorsController.Request): Promise<HttpResponse> {
    const required = ['latitude', 'longitude'];

    for (const field of required) {
      if (!request[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const result = await this.userRepository.listByLagitudeAndLogitude({
      latitude: Number(request.latitude),
      longitude: Number(request.longitude),
      specialty: request.specialty,
    });

    return ok({ data: result });
  }
}

export namespace ListDoctorsController {
  export type Request = {
    latitude: number;
    longitude: number;
    specialty?: string;
  };
}
