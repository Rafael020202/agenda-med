import { ok } from '@/helpers';
import {
  Controller,
  HttpResponse,
  IAppointmentRepository,
  IUserRepository,
} from '@/protocols';

export class ListAppointmentController implements Controller {
  constructor(
    private appointmentRepository: IAppointmentRepository,
    private userRepository: IUserRepository
  ) {}

  async handle(
    request: ListAppointmentController.Request
  ): Promise<HttpResponse> {
    const user = await this.userRepository.findById(request.userId);
    let appointments;

    if (user.is_provider) {
      appointments = await this.appointmentRepository.listByProviderId(user.id);
    } else {
      appointments = await this.appointmentRepository.listByUserId(user.id);
    }

    return ok(appointments);
  }
}

export namespace ListAppointmentController {
  export type Request = {
    userId: string;
  };
}
