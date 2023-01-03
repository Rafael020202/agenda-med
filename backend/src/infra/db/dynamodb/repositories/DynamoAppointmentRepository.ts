import AWS from 'aws-sdk';
import { v4 as uuid } from 'uuid';

import { IAppointmentRepository } from '@/protocols';
import env from '@/config/env';

export class DynamoAppointmentRepository implements IAppointmentRepository {
  private dynamo = new AWS.DynamoDB.DocumentClient();

  async add(
    params: IAppointmentRepository.add['Params']
  ): Promise<IAppointmentRepository.add['Result']> {
    const now = new Date();
    const appointment = {
      ...params,
      id: uuid(),
      created_at: now.toISOString(),
      updated_at: now.toISOString(),
    };

    await this.dynamo
      .put({
        Item: appointment,
        TableName: env.AppointmentTableName,
      })
      .promise();

    return appointment;
  }

  async findByDateAndServiceId(
    date: string,
    serviceId: string
  ): Promise<IAppointmentRepository.findByDate['Result']> {
    const result = await this.dynamo
      .query({
        TableName: env.AppointmentTableName,
        IndexName: 'dateIndex',
        KeyConditionExpression: '#date = :date',
        FilterExpression: 'service_id = :service_id',
        ExpressionAttributeNames: {
          '#date': 'date',
        },
        ExpressionAttributeValues: {
          ':date': date,
          ':service_id': serviceId,
        },
      })
      .promise();

    return <any>result.Items[0];
  }

  async listByProviderId(
    providerId: string
  ): Promise<IAppointmentRepository.listByProviderId['Result']> {
    const result = await this.dynamo
      .query({
        TableName: env.AppointmentTableName,
        IndexName: 'providerIdIndex',
        KeyConditionExpression: 'provider_id = :provider_id',
        ExpressionAttributeValues: {
          ':provider_id': providerId,
        },
      })
      .promise();

    return <any>result.Items;
  }

  async listByUserId(
    userId: string
  ): Promise<IAppointmentRepository.listByUserId['Result']> {
    const result = await this.dynamo
      .query({
        TableName: env.AppointmentTableName,
        IndexName: 'userIdIndex',
        KeyConditionExpression: 'user_id = :user_id',
        ExpressionAttributeValues: {
          ':user_id': userId,
        },
      })
      .promise();

    return <any>result.Items;
  }
}
