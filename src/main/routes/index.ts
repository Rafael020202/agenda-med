import { Router } from 'express';

import {
  makeSignUpController,
  makeLoginController,
  makeListDoctorsController,
  makeAddDateToScheduleController,
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
  expressRouteDecorator(makeAddDateToScheduleController())
);
router.patch(
  '/schedule/:sheduleId',
  expressMiddlewareDecorator(makeAuthMiddleware()),
  expressRouteDecorator(makeCreateAppointmentController())
);
router.get(
  '/schedule',
  expressMiddlewareDecorator(makeAuthMiddleware()),
  expressRouteDecorator(makeListScheduleController())
);

export default router;
