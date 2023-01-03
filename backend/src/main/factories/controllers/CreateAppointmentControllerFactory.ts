import { CreateAppointmentController } from '@/controllers';
import { DynamoAppointmentRepository } from '@/infra/db';

export const makeCreateAppointmentController = () => {
  const appointmentRepository = new DynamoAppointmentRepository();

  return new CreateAppointmentController(appointmentRepository);
};
