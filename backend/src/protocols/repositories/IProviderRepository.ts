import { UserModel } from '@/models';

export interface IProviderRepository {
  findById(id: string): Promise<IProviderRepository.findById['Result']>;

  listByLocation(
    params: IProviderRepository.listByLagitudeAndLogitude['Params']
  ): Promise<IProviderRepository.listByLagitudeAndLogitude['Result']>;
}

export namespace IProviderRepository {
  export type listByLagitudeAndLogitude = {
    Params: {
      latitude: number;
      longitude: number;
    };

    Result: UserModel[];
  };

  export type findById = {
    Result: UserModel;
  };
}
