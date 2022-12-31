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

  async findByDate(
    date: string
  ): Promise<IAppointmentRepository.findByDate['Result']> {
    const result = await this.dynamo
      .query({
        TableName: env.AppointmentTableName,
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

  async listByDoctorId(
    doctorId: string
  ): Promise<IAppointmentRepository.listByDoctorId['Result']> {
    const result = await this.dynamo
      .query({
        TableName: env.AppointmentTableName,
        IndexName: 'doctorIdIndex',
        KeyConditionExpression: 'doctor_id = :doctor_id',
        ExpressionAttributeValues: {
          ':doctor_id': doctorId,
        },
      })
      .promise();

    return <any>result.Items;
  }

  async listByPatientId(
    patientId: string
  ): Promise<IAppointmentRepository.listByPatientId['Result']> {
    const result = await this.dynamo
      .query({
        TableName: env.AppointmentTableName,
        IndexName: 'patientIdIndex',
        KeyConditionExpression: 'patient_id = :patient_id',
        ExpressionAttributeValues: {
          ':patient_id': patientId,
        },
      })
      .promise();

    return <any>result.Items;
  }
}
