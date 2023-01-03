import { Service, Company } from '@/models';

export interface ICompanyRepository {
  add(
    params: ICompanyRepository.add['Params']
  ): Promise<ICompanyRepository.add['Result']>;

  listByLagitudeAndLogitude(
    params: ICompanyRepository.listByLagitudeAndLogitude['Params']
  ): Promise<ICompanyRepository.listByLagitudeAndLogitude['Result']>;
}

export namespace ICompanyRepository {
  export type add = {
    Params: {
      name: string;
      city: string;
      state_abbr: string;
      address: string;
      postcode: string;
      latitude: number;
      longitude: number;
      services: Service[];
      provider_id: string;
    };

    Result: Company;
  };

  export type listByLagitudeAndLogitude = {
    Params: {
      latitude: number;
      longitude: number;
    };

    Result: Company[];
  };
}
