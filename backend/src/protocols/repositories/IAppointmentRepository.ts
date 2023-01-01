import { AppointmentModel } from '@/models';

export interface IAppointmentRepository {
  add(
    params: IAppointmentRepository.add['Params']
  ): Promise<IAppointmentRepository.add['Result']>;

  listByDoctorId(
    doctorId: string
  ): Promise<IAppointmentRepository.listByDoctorId['Result']>;

  listByPatientId(
    patientId: string
  ): Promise<IAppointmentRepository.listByPatientId['Result']>;

  findByDateAndDoctorId(
    date: string,
    doctorId: string
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

  export type listByDoctorId = {
    Result: AppointmentModel[];
  };

  export type listByPatientId = {
    Result: AppointmentModel[];
  };
}
