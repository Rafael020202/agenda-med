import { ListProviderServicesController } from '@/controllers';
import { DynamoServiceRepository } from '@/infra/db';

export const makeListProviderServicesController = () => {
  const serviceRepository = new DynamoServiceRepository();

  return new ListProviderServicesController(serviceRepository);
};
