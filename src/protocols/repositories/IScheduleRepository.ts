import { ScheduleModel } from '@/models';

export interface IScheduleRepository {
  add(
    params: IScheduleRepository.add['Params']
  ): Promise<IScheduleRepository.add['Result']>;

  findByDate(date: string): Promise<IScheduleRepository.findByDate['Result']>;
}

export namespace IScheduleRepository {
  export type add = {
    Params: {
      doctor_id: string;
      date: string;
    };

    Result: ScheduleModel;
  };

  export type findByDate = {
    Result: ScheduleModel;
  };
}
