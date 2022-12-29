import { Topics } from '@/config/queue';

export interface IQueueProvider {
  add(topic: keyof typeof Topics, message: any): Promise<void>;
}
