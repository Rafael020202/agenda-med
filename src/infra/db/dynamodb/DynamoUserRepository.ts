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
      ...params,
      id: uuid(),
      is_doctor: params.is_doctor ?? false,
      specialty: params.specialty ?? '',
      appointment_value: params.appointment_value ?? 0,
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

  async findById(id: string): Promise<IUserRepository.findById['Result']> {
    const result = await this.dynamo
      .get({
        TableName: env.UsersTableName,
        Key: { id },
      })
      .promise();

    return <any>result.Item;
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

  async listByLagitudeAndLogitude(
    params: IUserRepository.listByLagitudeAndLogitude['Params']
  ): Promise<IUserRepository.listByLagitudeAndLogitude['Result']> {
    let filterExpression = 'is_doctor = :is_doctor';
    const expressionAttributeValues = {
      ':longitude': params.longitude,
      ':latitude': params.latitude,
      ':is_doctor': true,
    };

    if (params.specialty) {
      expressionAttributeValues[':specialty'] = params.specialty;
      filterExpression = filterExpression.concat(' AND specialty = :specialty');
    }

    const result = await this.dynamo
      .query({
        TableName: env.UsersTableName,
        IndexName: 'latitudeLongitudeIndex',
        KeyConditionExpression:
          'latitude = :latitude AND longitude = :longitude',
        FilterExpression: filterExpression,
        ProjectionExpression:
          'id, #name, document, email, specialty, created_at, updated_at',
        ExpressionAttributeNames: {
          '#name': 'name',
        },
        ExpressionAttributeValues: expressionAttributeValues,
      })
      .promise();

    return <any>result.Items;
  }

  async setAsInvalid(document: string): Promise<void> {
    await this.dynamo
      .update({
        TableName: env.UsersTableName,
        Key: { document },
        UpdateExpression: 'set is_valid = :value',
        ExpressionAttributeValues: {
          ':value': false,
        },
        ReturnValues: 'ALL_NEW',
      })
      .promise();
  }
}
