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

    const companyId = uuid();
    const company = {
      ...params,
      id: companyId,
      services: params.services
        ? params.services.map((service) => ({
            id: uuid(),
            company_id: companyId,
            ...service,
          }))
        : [],
      created_at: now.toISOString(),
      updated_at: now.toISOString(),
    };

    await this.dynamo
      .put({
        Item: company,
        TableName: env.CompanyTableName,
      })
      .promise();

    return company;
  }

  async listByLagitudeAndLogitude(
    params: ICompanyRepository.listByLagitudeAndLogitude['Params']
  ): Promise<ICompanyRepository.listByLagitudeAndLogitude['Result']> {
    const result = await this.dynamo
      .query({
        TableName: env.CompanyTableName,
        IndexName: 'latitudeLongitudeIndex',
        KeyConditionExpression:
          'latitude = :latitude AND longitude = :longitude',

        ExpressionAttributeValues: {
          ':longitude': params.longitude,
          ':latitude': params.latitude,
        },
      })
      .promise();

    return <any>result.Items;
  }

  async findById(id: string): Promise<ICompanyRepository.findById['Result']> {
    const result = await this.dynamo
      .get({
        TableName: env.CompanyTableName,
        Key: { id },
      })
      .promise();

    return <any>result.Item;
  }

  async updateAttr({
    id,
    attribute,
    value,
  }: ICompanyRepository.updateAttr['Params']): Promise<
    ICompanyRepository.updateAttr['Result']
  > {
    await this.dynamo
      .update({
        TableName: env.CompanyTableName,
        Key: { id },
        UpdateExpression: `set #${attribute} = :value`,
        ExpressionAttributeNames: {
          [`#${attribute}`]: attribute,
        },
        ExpressionAttributeValues: {
          ':value': value,
        },
        ReturnValues: 'ALL_NEW',
      })
      .promise();
  }
}
