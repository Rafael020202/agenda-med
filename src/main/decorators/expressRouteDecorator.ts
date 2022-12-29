import { Request, Response } from 'express';

import { Controller } from '@/protocols';

export const expressRouteDecorator = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const request = {
      ...(req.body || {}),
      ...(req.params || {}),
      ...(req.query || {}),
    };

    const result = await controller.execute(request);

    if (result.status >= 200 && result.status <= 299) {
      return res.status(result.status).json(result.body);
    } else {
      return res.status(result.status).json({ message: result.body.message });
    }
  };
};
