import { AppointmentModel, Service } from '@/models';

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

  findByDateAndServiceId(
    date: string,
    serviceId: string
  ): Promise<IAppointmentRepository.findByDateAndServiceId['Result']>;
}

export namespace IAppointmentRepository {
  export type add = {
    Params: {
      user_id: string;
      service_id: string;
      service: Service;
      provider_id: string;
      date: string;
    };

    Result: AppointmentModel;
  };

  export type findByDateAndServiceId = {
    Result: AppointmentModel;
  };

  export type listByProviderId = {
    Result: AppointmentModel[];
  };

  export type listByUserId = {
    Result: AppointmentModel[];
  };
}
