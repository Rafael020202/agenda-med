import { Service, Company } from '@/models';

export interface ICompanyRepository {
  add(
    params: ICompanyRepository.add['Params']
  ): Promise<ICompanyRepository.add['Result']>;
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
}
