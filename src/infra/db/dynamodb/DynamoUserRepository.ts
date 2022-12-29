import AWS from 'aws-sdk';
import { v4 as uuid } from 'uuid';

import { IUserRepository } from '@/protocols/repositories';
import env from '@/config/env';

export class DynamoUserRepository implements IUserRepository {
  private dynamo = new AWS.DynamoDB.DocumentClient();

  async add(
    params: IUserRepository.add['Params']
  ): Promise<IUserRepository.add['Result']> {
    const now = new Date();
    const user = {
      id: uuid(),
      ...params,
      created_at: now.toISOString(),
      updated_at: now.toISOString(),
    };

    await this.dynamo
      .put({
        Item: user,
        TableName: env.UsersTableName,
      })
      .promise();

    return user;
  }

  async findByEmail(
    email: string
  ): Promise<IUserRepository.findByEmail['Result']> {
    const result = await this.dynamo
      .query({
        TableName: env.UsersTableName,
        IndexName: 'emailIndex',
        KeyConditionExpression: 'email = :email',
        ExpressionAttributeValues: {
          ':email': email,
        },
      })
      .promise();

    if (result.Items.length) {
      return <any>result.Items[0];
    }

    return null;
  }
}
