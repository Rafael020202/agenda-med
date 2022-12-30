import { ListDoctorsController } from '@/controllers';
import { DynamoUserRepository } from '@/infra/db';

export const makeListDoctorsController = () => {
  const userRepository = new DynamoUserRepository();

  return new ListDoctorsController(userRepository);
};
