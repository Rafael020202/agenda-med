import { ScheduleModel } from '@/models';

export interface IScheduleRepository {
  add(
    params: IScheduleRepository.add['Params']
  ): Promise<IScheduleRepository.add['Result']>;

  findByDate(date: string): Promise<IScheduleRepository.findByDate['Result']>;

  findById(id: string): Promise<IScheduleRepository.findById['Result']>;

  listByProviderId(
    providerId: string
  ): Promise<IScheduleRepository.listByProviderId['Result']>;
}

export namespace IScheduleRepository {
  export type add = {
    Params: {
      provider_id: string;
      hours: string[];
      from?: number;
      to?: number;
      date?: string;
    };

    Result: ScheduleModel;
  };

  export type findByDate = {
    Result: ScheduleModel;
  };

  export type findById = {
    Result: ScheduleModel;
  };

  export type listByProviderId = {
    Result: ScheduleModel[];
  };
}
