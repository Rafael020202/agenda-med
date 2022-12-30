import {
  AccessDeniedError,
  AlreadyExistsError,
  InvalidParamError,
  MissingParamError,
} from '@/errors';
import { forbidden, ok, alreadyExists, badRequest } from '@/helpers';
import {
  Controller,
  HttpResponse,
  IUserRepository,
  IScheduleRepository,
} from '@/protocols';

export class AddDateToScheduleController implements Controller {
  constructor(
    private userRepository: IUserRepository,
    private scheduleRepository: IScheduleRepository
  ) {}

  async handle(
    request: AddDateToScheduleController.Request
  ): Promise<HttpResponse> {
    if (!request.date) {
      return badRequest(new MissingParamError('date'));
    }

    if (new Date(request.date) < new Date()) {
      return badRequest(new InvalidParamError('date'));
    }

    const user = await this.userRepository.findById(request.userId);

    if (!user.is_doctor) {
      return forbidden(new AccessDeniedError('user is not a doctor'));
    }

    const scheduleExists = await this.scheduleRepository.findByDate(
      request.date
    );

    if (scheduleExists) {
      return alreadyExists(new AlreadyExistsError('date already on schedule'));
    }

    const createdSchedule = await this.scheduleRepository.add({
      doctor_id: request.userId,
      date: request.date,
    });

    return ok(createdSchedule);
  }
}

export namespace AddDateToScheduleController {
  export type Request = {
    userId: string;
    date: string;
  };
}
