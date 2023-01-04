import AWS from 'aws-sdk';

import { IProviderRepository } from '@/protocols/repositories';
import env from '@/config/env';

export class DynamoProviderRepository implements IProviderRepository {
  private dynamo = new AWS.DynamoDB.DocumentClient();

  async findById(id: string): Promise<IProviderRepository.findById['Result']> {
    const result = await this.dynamo
      .get({
        TableName: env.UsersTableName,
        Key: { id },
      })
      .promise();

    const user: any = result.Item;

    return user && user.is_provider ? user : null;
  }

  async listByLocation(
    params: IProviderRepository.listByLagitudeAndLogitude['Params']
  ): Promise<IProviderRepository.listByLagitudeAndLogitude['Result']> {
    const result = await this.dynamo
      .query({
        TableName: env.UsersTableName,
        IndexName: 'latitudeLongitudeIndex',
        KeyConditionExpression:
          'latitude = :latitude AND longitude = :longitude',
        FilterExpression: 'is_provider = :is_provider',
        ProjectionExpression:
          'id, #name, document, email, city, state_abbr, address, postcode, latitude, longitude, created_at, updated_at',
        ExpressionAttributeNames: {
          '#name': 'name',
        },
        ExpressionAttributeValues: {
          ':longitude': params.longitude,
          ':latitude': params.latitude,
          ':is_provider': true,
        },
      })
      .promise();

    return <any>result.Items;
  }
}
