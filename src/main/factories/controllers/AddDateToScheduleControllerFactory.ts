import { AddDateToScheduleController } from '@/controllers';
import { DynamoUserRepository, DynamoScheduleRepository } from '@/infra/db';

export const makeAddDateToScheduleController = () => {
  const userRepository = new DynamoUserRepository();
  const scheduleRepository = new DynamoScheduleRepository();

  return new AddDateToScheduleController(userRepository, scheduleRepository);
};
