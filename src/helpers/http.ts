import { UnauthorizedError } from '@/errors';

export const ok = (data) => {
  return {
    status: 200,
    body: data,
  };
};

export const badRequest = (error: Error) => {
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

export const alreadyExists = (error: Error) => {
  return {
    status: 409,
    body: error,
  };
};

export const noContent = () => {
  return {
    status: 204,
    body: null,
  };
};

export const forbidden = (error: Error) => {
  return {
    status: 403,
    body: error,
  };
};
