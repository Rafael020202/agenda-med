import { ServiceModel } from '@/models';

export interface IServiceRepository {
  add(
    params: IServiceRepository.add['Params']
  ): Promise<IServiceRepository.add['Result']>;

  listByProviderId(
    providerId: string
  ): Promise<IServiceRepository.listByProviderId['Result']>;
}

export namespace IServiceRepository {
  export type add = {
    Params: {
      provider_id: string;
      name: string;
      value: number;
    };

    Result: ServiceModel;
  };

  export type listByProviderId = {
    Result: ServiceModel[];
  };
}
