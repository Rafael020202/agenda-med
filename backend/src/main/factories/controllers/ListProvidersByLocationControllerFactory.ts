import { ListProvidersByLocationController } from '@/controllers';
import { DynamoUserRepository } from '@/infra/db';

export const makeListProvidersByLocationController = () => {
  const userRepository = new DynamoUserRepository();

  return new ListProvidersByLocationController(userRepository);
};
