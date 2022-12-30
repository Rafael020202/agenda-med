import AWS from 'aws-sdk';
import { v4 as uuid } from 'uuid';

import { IScheduleRepository } from '@/protocols/repositories';
import env from '@/config/env';

export class DynamoScheduleRepository implements IScheduleRepository {
  private dynamo = new AWS.DynamoDB.DocumentClient();

  async add(
    params: IScheduleRepository.add['Params']
  ): Promise<IScheduleRepository.add['Result']> {
    const now = new Date();
    const schedule = {
      ...params,
      id: uuid(),
      patient_id: null,
      created_at: now.toISOString(),
      updated_at: now.toISOString(),
    };

    await this.dynamo
      .put({
        Item: schedule,
        TableName: env.ScheduleTableName,
      })
      .promise();

    return schedule;
  }

  async findByDate(
    date: string
  ): Promise<IScheduleRepository.findByDate['Result']> {
    const result = await this.dynamo
      .query({
        TableName: env.ScheduleTableName,
        IndexName: 'dateIndex',
        KeyConditionExpression: '#date = :date',
        ExpressionAttributeNames: {
          '#date': 'date',
        },
        ExpressionAttributeValues: {
          ':date': date,
        },
      })
      .promise();

    return <any>result.Items[0];
  }
}
