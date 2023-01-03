import { Router } from 'express';

import {
  makeSignUpController,
  makeLoginController,
  makeListCompaniesByLocationController,
  makeAddToScheduleController,
  makeCreateAppointmentController,
  makeListScheduleController,
  makeListAppointmentController,
  makeListUserInfoController,
  makeCreateCompanyController,
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
  '/user/:user_id',
  expressMiddlewareDecorator(makeAuthMiddleware()),
  expressRouteDecorator(makeListUserInfoController())
);

router.post(
  '/company',
  expressMiddlewareDecorator(makeAuthMiddleware()),
  expressRouteDecorator(makeCreateCompanyController())
);
router.get(
  '/company',
  expressMiddlewareDecorator(makeAuthMiddleware()),
  expressRouteDecorator(makeListCompaniesByLocationController())
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
router.get(
  '/appointment',
  expressMiddlewareDecorator(makeAuthMiddleware()),
  expressRouteDecorator(makeListAppointmentController())
);

export default router;
