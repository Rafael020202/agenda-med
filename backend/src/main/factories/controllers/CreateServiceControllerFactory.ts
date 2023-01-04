import { CreateServiceController } from '@/controllers';
import { DynamoServiceRepository } from '@/infra/db';

export const makeCreateServiceController = () => {
  const serviceRepository = new DynamoServiceRepository();

  return new CreateServiceController(serviceRepository);
};
