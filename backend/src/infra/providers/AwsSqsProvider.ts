import AWS from 'aws-sdk';

import { Topics } from '@/config/queue';
import { IQueueProvider } from '@/protocols';

const sqs = new AWS.SQS();

const topicMap = {
  [Topics.verify_crm]: process.env.VERIFY_CRM_QUEUE_URL,
};

export class AwsSqsProvider implements IQueueProvider {
  async add(topic: string, message: any): Promise<void> {
    await sqs
      .sendMessage({
        QueueUrl: topicMap[topic],
        MessageBody: JSON.stringify({ ...message }),
      })
      .promise();
  }
}
