import { CreateAppointmentController } from '@/controllers';
import { DynamoScheduleRepository } from '@/infra/db';

export const makeCreateAppointmentController = () => {
  const scheduleRepository = new DynamoScheduleRepository();

  return new CreateAppointmentController(scheduleRepository);
};
