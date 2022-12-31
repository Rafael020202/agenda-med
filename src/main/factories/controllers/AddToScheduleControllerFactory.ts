import { AddToScheduleController } from '@/controllers';
import { DynamoUserRepository, DynamoScheduleRepository } from '@/infra/db';

export const makeAddToScheduleController = () => {
  const userRepository = new DynamoUserRepository();
  const scheduleRepository = new DynamoScheduleRepository();

  return new AddToScheduleController(userRepository, scheduleRepository);
};
