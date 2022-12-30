import { AlreadyExistsError, MissingParamError } from '@/errors';
import { noContent, alreadyExists, badRequest } from '@/helpers';
import { Controller, HttpResponse, IScheduleRepository } from '@/protocols';

export class CreateAppointmentController implements Controller {
  constructor(private scheduleRepository: IScheduleRepository) {}

  async handle(
    request: CreateAppointmentController.Request
  ): Promise<HttpResponse> {
    console.log(request);
    if (!request.sheduleId) {
      return badRequest(new MissingParamError('shedule_id'));
    }

    const { sheduleId, userId } = request;

    const schedule = await this.scheduleRepository.findById(sheduleId);

    console.log({ schedule });

    if (schedule.patient_id) {
      return alreadyExists(new AlreadyExistsError('schedule already booked'));
    }

    await this.scheduleRepository.assignPatient(sheduleId, userId);

    return noContent();
  }
}

export namespace CreateAppointmentController {
  export type Request = {
    userId: string;
    sheduleId: string;
  };
}
