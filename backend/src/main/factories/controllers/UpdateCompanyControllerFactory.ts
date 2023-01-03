import { UpdateCompanyController } from '@/controllers';
import { DynamoCompanyRepository } from '@/infra/db';

export const makeUpdateCompanyController = () => {
  const companyRepository = new DynamoCompanyRepository();

  return new UpdateCompanyController(companyRepository);
};
