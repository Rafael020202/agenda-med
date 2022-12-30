import { Request, Response, NextFunction } from 'express';

import { Middleware } from '@/protocols';

export const expressMiddlewareDecorator = (middleware: Middleware) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const request = {
      ...(req.headers || {}),
    };

    const httpResponse = await middleware.handle(request);

    if (httpResponse.status === 200) {
      Object.assign(req, httpResponse.body);
      next();
    } else {
      return res.status(httpResponse.status).json({
        message: httpResponse.body.message,
        code: httpResponse.body.code,
      });
    }
  };
};
