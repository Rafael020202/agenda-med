import { UnauthorizedError } from '@/errors';

export const ok = (data) => {
  return {
    status: 200,
    body: data,
  };
};

export const badRequest = (error) => {
  return {
    status: 400,
    body: error,
  };
};

export const unauthorized = () => {
  return {
    status: 401,
    body: new UnauthorizedError(),
  };
};
