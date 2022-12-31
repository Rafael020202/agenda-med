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

    console.log({ request });

    if (user.is_doctor) {
      appointments = await this.appointmentRepository.listByDoctorId(user.id);
    } else {
      appointments = await this.appointmentRepository.listByPatientId(user.id);
    }

    return ok(appointments);
  }
}

export namespace ListAppointmentController {
  export type Request = {
    userId: string;
  };
}
