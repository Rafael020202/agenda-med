import { LoginController } from '@/controllers';
import { DynamoUserRepository } from '@/infra/db';
import { BcryptProvider, JwtProvider } from '@/infra/providers';

export const makeLogin = () => {
  const userRepository = new DynamoUserRepository();
  const bcryptProvider = new BcryptProvider();
  const jwtProvider = new JwtProvider('123');

  return new LoginController(userRepository, bcryptProvider, jwtProvider);
};
