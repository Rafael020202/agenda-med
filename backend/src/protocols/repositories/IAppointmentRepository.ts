import { AppointmentModel, ServiceModel } from '@/models';

export interface IAppointmentRepository {
  add(
    params: IAppointmentRepository.add['Params']
  ): Promise<IAppointmentRepository.add['Result']>;

  listByProviderId(
    providerId: string
  ): Promise<IAppointmentRepository.listByProviderId['Result']>;

  listByUserId(
    userId: string
  ): Promise<IAppointmentRepository.listByUserId['Result']>;

  findByDateAndProviderId(
    date: string,
    providerId: string
  ): Promise<IAppointmentRepository.findByDateAndProviderId['Result']>;
}

export namespace IAppointmentRepository {
  export type add = {
    Params: {
      user_id: string;
      service_id: string;
      provider_id: string;
      service: ServiceModel;
      date: string;
    };

    Result: AppointmentModel;
  };

  export type findByDateAndProviderId = {
    Result: AppointmentModel;
  };

  export type listByProviderId = {
    Result: AppointmentModel[];
  };

  export type listByUserId = {
    Result: AppointmentModel[];
  };
}
