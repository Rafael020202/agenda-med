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
      from: params.from ?? null,
      to: params.to ?? null,
      date: params.date ?? new Date(null).toISOString(),
      hours: params.hours,
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

  async findById(id: string): Promise<IScheduleRepository.findById['Result']> {
    const result = await this.dynamo
      .get({
        TableName: env.ScheduleTableName,
        Key: { id },
      })
      .promise();

    return <any>result.Item;
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

  async findByDoctorId(
    doctorId: string
  ): Promise<IScheduleRepository.findByDoctorId['Result']> {
    const result = await this.dynamo
      .query({
        TableName: env.ScheduleTableName,
        IndexName: 'doctorIdIndex',
        KeyConditionExpression: 'doctor_id = :doctor_id',
        ExpressionAttributeValues: {
          ':doctor_id': doctorId,
        },
      })
      .promise();

    return <any>result.Items;
  }
}
