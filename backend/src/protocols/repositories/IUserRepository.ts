import { UserModel } from '@/models';

export interface IUserRepository {
  add(
    params: IUserRepository.add['Params']
  ): Promise<IUserRepository.add['Result']>;

  findByEmail(email: string): Promise<IUserRepository.findByEmail['Result']>;

  findById(id: string): Promise<IUserRepository.findById['Result']>;

  setAsInvalid(userId: string): Promise<void>;

  listByLagitudeAndLogitude(
    params: IUserRepository.listByLagitudeAndLogitude['Params']
  ): Promise<IUserRepository.listByLagitudeAndLogitude['Result']>;
}

export namespace IUserRepository {
  export type add = {
    Params: {
      name: string;
      email: string;
      password: string;
      document: string;
      is_provider?: boolean;
      city?: string;
      district?: string;
      number?: number;
      state_abbr?: string;
      address?: string;
      postcode?: string;
      latitude?: number;
      longitude?: number;
    };

    Result: UserModel;
  };

  export type findByEmail = {
    Result: UserModel;
  };

  export type findById = {
    Result: UserModel;
  };

  export type listByLagitudeAndLogitude = {
    Params: {
      latitude: number;
      longitude: number;
      specialty?: string;
    };

    Result: UserModel[];
  };
}
