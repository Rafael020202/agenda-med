import env from '@/config/env';
import { LoginController } from '@/controllers';
import { DynamoUserRepository } from '@/infra/db';
import { BcryptProvider, JwtProvider } from '@/infra/providers';

export const makeLoginController = () => {
  const userRepository = new DynamoUserRepository();
  const bcryptProvider = new BcryptProvider();
  const jwtProvider = new JwtProvider(env.JwtSecret);

  return new LoginController(userRepository, bcryptProvider, jwtProvider);
};
