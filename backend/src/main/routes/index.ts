import { Router } from 'express';

import {
  makeSignUpController,
  makeLoginController,
  makeListProvidersByLocationController,
  makeAddToScheduleController,
  makeCreateAppointmentController,
  makeListScheduleController,
  makeListAppointmentController,
  makeListUserInfoController,
  makeCreateServiceController,
  makeListProviderServicesController,
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
router.get(
  '/users',
  expressMiddlewareDecorator(makeAuthMiddleware()),
  expressRouteDecorator(makeListProvidersByLocationController())
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

router.post(
  '/service',
  expressMiddlewareDecorator(makeAuthMiddleware()),
  expressRouteDecorator(makeCreateServiceController())
);
router.get(
  '/services',
  expressMiddlewareDecorator(makeAuthMiddleware()),
  expressRouteDecorator(makeListProviderServicesController())
);

export default router;
