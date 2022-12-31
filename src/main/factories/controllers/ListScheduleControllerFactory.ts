import { ListScheduleController } from '@/controllers';
import { DynamoScheduleRepository } from '@/infra/db';

export const makeListScheduleController = () => {
  const scheduleRepository = new DynamoScheduleRepository();

  return new ListScheduleController(scheduleRepository);
};
