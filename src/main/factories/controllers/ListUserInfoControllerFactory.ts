import { ListUserInfoController } from '@/controllers';
import { DynamoUserRepository } from '@/infra/db';

export const makeListUserInfoController = () => {
  const userRepository = new DynamoUserRepository();

  return new ListUserInfoController(userRepository);
};
