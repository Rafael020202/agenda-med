import { CreateServiceController } from '@/controllers';
import { DynamoServiceRepository, DynamoProviderRepository } from '@/infra/db';

export const makeCreateServiceController = () => {
  const serviceRepository = new DynamoServiceRepository();
  const providerRepository = new DynamoProviderRepository();

  return new CreateServiceController(serviceRepository, providerRepository);
};
