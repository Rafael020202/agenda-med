import { ScheduleModel } from '@/models';

export interface IScheduleRepository {
  add(
    params: IScheduleRepository.add['Params']
  ): Promise<IScheduleRepository.add['Result']>;

  findByDate(date: string): Promise<IScheduleRepository.findByDate['Result']>;

  findById(id: string): Promise<IScheduleRepository.findById['Result']>;

  assignPatient(scheduleId: string, patientId: string): Promise<void>;
}

export namespace IScheduleRepository {
  export type add = {
    Params: {
      doctor_id: string;
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
}
