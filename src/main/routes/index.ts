import { Router } from 'express';

import {
  makeSignUpController,
  makeLoginController,
  makeListDoctorsController,
} from '@/main/factories';
import { expressRouteDecorator } from '@/main/decorators';

const router = Router();

router.post('/signup', expressRouteDecorator(makeSignUpController()));
router.post('/signin', expressRouteDecorator(makeLoginController()));

router.get('/doctors', expressRouteDecorator(makeListDoctorsController()));

export default router;
