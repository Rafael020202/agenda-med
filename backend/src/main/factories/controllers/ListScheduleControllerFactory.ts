import { ListScheduleController } from '@/controllers';
import { DynamoScheduleRepository, DynamoProviderRepository } from '@/infra/db';

export const makeListScheduleController = () => {
  const scheduleRepository = new DynamoScheduleRepository();
  const providerRepository = new DynamoProviderRepository();

  return new ListScheduleController(scheduleRepository, providerRepository);
};
