import env from '@/config/env';
import { AuthMiddleware } from '@/middlewares';
import { JwtProvider } from '@/infra/providers';

export const makeAuthMiddleware = () => {
  const jwtProvider = new JwtProvider(env.JwtSecret);

  return new AuthMiddleware(jwtProvider);
};
