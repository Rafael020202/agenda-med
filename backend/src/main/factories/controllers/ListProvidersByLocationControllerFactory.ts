import { ListProvidersByLocationController } from '@/controllers';
import { DynamoProviderRepository } from '@/infra/db';

export const makeListProvidersByLocationController = () => {
  const providerRepository = new DynamoProviderRepository();

  return new ListProvidersByLocationController(providerRepository);
};
