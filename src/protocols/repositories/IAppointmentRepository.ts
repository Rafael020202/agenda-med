import { AppointmentModel } from '@/models';

export interface IAppointmentRepository {
  add(
    params: IAppointmentRepository.add['Params']
  ): Promise<IAppointmentRepository.add['Result']>;

  findByDate(
    date: string
  ): Promise<IAppointmentRepository.findByDate['Result']>;
}

export namespace IAppointmentRepository {
  export type add = {
    Params: {
      patient_id: string;
      doctor_id: string;
      value: number;
      date: string;
    };

    Result: AppointmentModel;
  };

  export type findByDate = {
    Result: AppointmentModel;
  };
}
