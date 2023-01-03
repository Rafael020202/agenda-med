import { ListCompaniesByLocationController } from '@/controllers';
import { DynamoCompanyRepository } from '@/infra/db';

export const makeListCompaniesByLocationController = () => {
  const companyRepository = new DynamoCompanyRepository();

  return new ListCompaniesByLocationController(companyRepository);
};
