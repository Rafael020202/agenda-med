import { AlreadyExistsError, MissingParamError } from '@/errors';
import { alreadyExists, badRequest, ok } from '@/helpers';
import { Controller, HttpResponse, IAppointmentRepository } from '@/protocols';

export class CreateAppointmentController implements Controller {
  constructor(private appointmentRepository: IAppointmentRepository) {}

  async handle(
    request: CreateAppointmentController.Request
  ): Promise<HttpResponse> {
    const required = ['service_id', 'date', 'provider_id', 'service'];

    for (const field of required) {
      if (!request[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const { date, service, service_id } = request;
    const appointmentExists =
      await this.appointmentRepository.findByDateAndServiceId(date, service_id);

    if (appointmentExists) {
      return alreadyExists(new AlreadyExistsError('appointment'));
    }

    const appointment = await this.appointmentRepository.add({
      date,
      service,
      service_id,
      user_id: request.userId,
      provider_id: request.provider_id,
    });

    return ok(appointment);
  }
}

export namespace CreateAppointmentController {
  export type Request = {
    userId: string;
    service_id: string;
    service: {
      id: string;
      company_id: string;
      name: string;
      value: number;
    };
    provider_id: string;
    date: string;
  };
}
