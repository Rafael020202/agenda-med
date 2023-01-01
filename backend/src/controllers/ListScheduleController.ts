import { ok } from '@/helpers';
import { Controller, HttpResponse, IScheduleRepository } from '@/protocols';

export class ListScheduleController implements Controller {
  constructor(private scheduleRepository: IScheduleRepository) {}

  async handle(request: ListScheduleController.Request): Promise<HttpResponse> {
    const schedule = await this.scheduleRepository.findByDoctorId(
      request.doctorId
    );

    return ok(schedule);
  }
}

export namespace ListScheduleController {
  export type Request = {
    doctorId: string;
  };
}
