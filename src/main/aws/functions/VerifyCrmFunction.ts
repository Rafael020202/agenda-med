import { IDocumentValidatorProvider, IUserRepository } from '@/protocols';
import { SimpleInfoProvider } from '@/infra/providers';
import { DynamoUserRepository } from '@/infra/db';

class VerifyCrmFunction {
  constructor(
    private crmValidator: IDocumentValidatorProvider,
    private userRepository: IUserRepository
  ) {}

  async execute(event) {
    const record = event.Records[0];
    const { crm, id } = JSON.parse(record.body);

    const isValid = await this.crmValidator.isValid(crm);

    if (!isValid) {
      await this.userRepository.setAsInvalid(id);
    }

    return;
  }
}

const verifyCrmFunction = new VerifyCrmFunction(
  new SimpleInfoProvider(),
  new DynamoUserRepository()
);

export const handler = verifyCrmFunction.execute.bind(verifyCrmFunction);
