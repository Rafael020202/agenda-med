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

export class AddToScheduleController implements Controller {
  constructor(
    private userRepository: IUserRepository,
    private scheduleRepository: IScheduleRepository
  ) {}

  async handle(
    request: AddToScheduleController.Request
  ): Promise<HttpResponse> {
    const user = await this.userRepository.findById(request.userId);

    if (!user.is_provider) {
      return forbidden(new AccessDeniedError());
    }

    const isRecurrent = request.from || request.to;
    const required = isRecurrent ? ['hours', 'from', 'to'] : ['hours', 'date'];

    for (const field of required) {
      if (!request[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    let createdSchedule;

    if (isRecurrent) {
      createdSchedule = await this.scheduleRepository.add({
        provider_id: request.userId,
        from: request.from,
        to: request.to,
        hours: request.hours,
      });

      return ok(createdSchedule);
    }

    if (new Date(request.date) < new Date()) {
      return badRequest(new InvalidParamError('date'));
    }

    const scheduleExists = await this.scheduleRepository.findByDate(
      request.date
    );

    if (scheduleExists) {
      return alreadyExists(new AlreadyExistsError('date'));
    }

    createdSchedule = await this.scheduleRepository.add({
      provider_id: request.userId,
      date: request.date,
      hours: request.hours,
    });

    return ok(createdSchedule);
  }
}

export namespace AddToScheduleController {
  export type Request = {
    userId: string;
    date: string;
    hours: string[];
    from: number;
    to: number;
  };
}
