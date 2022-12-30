import { UserModel } from '@/models';

export interface IUserRepository {
  add(
    params: IUserRepository.add['Params']
  ): Promise<IUserRepository.add['Result']>;

  findByEmail(email: string): Promise<IUserRepository.findByEmail['Result']>;

  setAsInvalid(userId: string): Promise<void>;
}

export namespace IUserRepository {
  export type add = {
    Params: {
      name: string;
      email: string;
      location: string;
      document: string;
      password: string;
      is_doctor?: boolean;
      specialty?: string;
    };

    Result: UserModel;
  };

  export type findByEmail = {
    Result: UserModel;
  };
}
