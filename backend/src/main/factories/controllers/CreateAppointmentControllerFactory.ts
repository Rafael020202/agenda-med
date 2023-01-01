import { CreateAppointmentController } from '@/controllers';
import { DynamoAppointmentRepository, DynamoUserRepository } from '@/infra/db';

export const makeCreateAppointmentController = () => {
  const appointmentRepository = new DynamoAppointmentRepository();
  const userRepository = new DynamoUserRepository();

  return new CreateAppointmentController(appointmentRepository, userRepository);
};
