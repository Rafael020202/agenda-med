import { AddToScheduleController } from '@/controllers';
import { DynamoProviderRepository, DynamoScheduleRepository } from '@/infra/db';

export const makeAddToScheduleController = () => {
  const providerRepository = new DynamoProviderRepository();
  const scheduleRepository = new DynamoScheduleRepository();

  return new AddToScheduleController(providerRepository, scheduleRepository);
};
