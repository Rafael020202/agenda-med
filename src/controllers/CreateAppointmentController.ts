import { AlreadyExistsError, MissingParamError, NotFoundError } from '@/errors';
import { alreadyExists, badRequest, notFound, ok } from '@/helpers';
import {
  Controller,
  HttpResponse,
  IAppointmentRepository,
  IUserRepository,
} from '@/protocols';

export class CreateAppointmentController implements Controller {
  constructor(
    private appointmentRepository: IAppointmentRepository,
    private userRepository: IUserRepository
  ) {}

  async handle(
    request: CreateAppointmentController.Request
  ): Promise<HttpResponse> {
    const required = ['doctor_id', 'value', 'date'];

    for (const field of required) {
      if (!request[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const { date, doctor_id, value } = request;
    const appointmentExists =
      await this.appointmentRepository.findByDateAndDoctorId(date, doctor_id);

    if (appointmentExists) {
      return alreadyExists(new AlreadyExistsError('appointment'));
    }

    const patient = await this.userRepository.findById(request.userId);

    if (!patient) {
      return notFound(new NotFoundError('patient'));
    }

    const doctor = await this.userRepository.findById(doctor_id);

    if (!doctor || !doctor.is_doctor) {
      return notFound(new NotFoundError('doctor'));
    }

    const appointment = await this.appointmentRepository.add({
      date,
      doctor_id,
      patient_id: request.userId,
      value,
    });

    return ok(appointment);
  }
}

export namespace CreateAppointmentController {
  export type Request = {
    userId: string;
    doctor_id: string;
    value: number;
    date: string;
  };
}
