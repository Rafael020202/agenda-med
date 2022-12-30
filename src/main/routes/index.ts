import { Router } from 'express';

import {
  makeSignUpController,
  makeLoginController,
  makeListDoctorsController,
  makeAuthMiddleware,
} from '@/main/factories';
import {
  expressRouteDecorator,
  expressMiddlewareDecorator,
} from '@/main/decorators';

const router = Router();

router.post('/signup', expressRouteDecorator(makeSignUpController()));
router.post('/signin', expressRouteDecorator(makeLoginController()));

router.get(
  '/doctors',
  expressMiddlewareDecorator(makeAuthMiddleware()),
  expressRouteDecorator(makeListDoctorsController())
);

export default router;
