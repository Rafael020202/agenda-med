import { Router } from 'express';

import {
  makeSignUpController,
  makeLoginController,
  makeListDoctorsController,
  makeAddToScheduleController,
  makeCreateAppointmentController,
  makeListScheduleController,
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

router.post(
  '/schedule',
  expressMiddlewareDecorator(makeAuthMiddleware()),
  expressRouteDecorator(makeAddToScheduleController())
);
router.get(
  '/schedule',
  expressMiddlewareDecorator(makeAuthMiddleware()),
  expressRouteDecorator(makeListScheduleController())
);

router.post(
  '/appointment',
  expressMiddlewareDecorator(makeAuthMiddleware()),
  expressRouteDecorator(makeCreateAppointmentController())
);

export default router;
