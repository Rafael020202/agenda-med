import AWS from 'aws-sdk';
import { v4 as uuid } from 'uuid';

import { ICompanyRepository } from '@/protocols/repositories';
import env from '@/config/env';

export class DynamoCompanyRepository implements ICompanyRepository {
  private dynamo = new AWS.DynamoDB.DocumentClient();

  async add(
    params: ICompanyRepository.add['Params']
  ): Promise<ICompanyRepository.add['Result']> {
    const now = new Date();
    const company = {
      ...params,
      id: uuid(),
      services: params.services ?? [],
      created_at: now.toISOString(),
      updated_at: now.toISOString(),
    };

    await this.dynamo
      .put({
        Item: company,
        TableName: env.ScheduleTableName,
      })
      .promise();

    return company;
  }
}
