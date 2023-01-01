import { ListDoctorsByLocationController } from '@/controllers';
import { DynamoUserRepository } from '@/infra/db';

export const makeListDoctorsByLocationController = () => {
  const userRepository = new DynamoUserRepository();

  return new ListDoctorsByLocationController(userRepository);
};
