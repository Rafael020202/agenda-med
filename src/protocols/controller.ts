import { HttpResponse } from '@/protocols';

export interface Controller<T = any> {
  execute: (request: T) => Promise<HttpResponse>;
}
