import { ListAppointmentController } from '@/controllers';
import { DynamoAppointmentRepository, DynamoUserRepository } from '@/infra/db';

export const makeListAppointmentController = () => {
  const appointmentRepository = new DynamoAppointmentRepository();
  const userRepository = new DynamoUserRepository();

  return new ListAppointmentController(appointmentRepository, userRepository);
};
