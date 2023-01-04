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

    const { date, service, provider_id, service_id } = request;
    const appointmentExists =
      await this.appointmentRepository.findByDateAndProviderId(
        date,
        provider_id
      );

    if (appointmentExists) {
      return alreadyExists(new AlreadyExistsError('appointment'));
    }

    const appointment = await this.appointmentRepository.add({
      date,
      service,
      service_id,
      provider_id,
      user_id: request.userId,
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
      provider_id: string;
      name: string;
      value: number;
      created_at: string;
      updated_at: string;
    };
    provider_id: string;
    date: string;
  };
}
