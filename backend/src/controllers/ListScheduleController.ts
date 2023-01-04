import { NotFoundError } from '@/errors';
import { notFound, ok } from '@/helpers';
import {
  Controller,
  HttpResponse,
  IScheduleRepository,
  IProviderRepository,
} from '@/protocols';

export class ListScheduleController implements Controller {
  constructor(
    private scheduleRepository: IScheduleRepository,
    private providerRepository: IProviderRepository
  ) {}

  async handle(request: ListScheduleController.Request): Promise<HttpResponse> {
    const provider = await this.providerRepository.findById(request.providerId);

    if (!provider) {
      return notFound(new NotFoundError('provider'));
    }

    const schedule = await this.scheduleRepository.listByProviderId(
      request.providerId
    );

    return ok(schedule);
  }
}

export namespace ListScheduleController {
  export type Request = {
    providerId: string;
  };
}
