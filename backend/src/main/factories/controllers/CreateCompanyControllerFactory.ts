import { CreateCompanyController } from '@/controllers';
import { DynamoCompanyRepository } from '@/infra/db';

export const makeCreateCompanyController = () => {
  const companyRepository = new DynamoCompanyRepository();

  return new CreateCompanyController(companyRepository);
};
