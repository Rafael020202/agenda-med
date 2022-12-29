import { Router } from 'express';

import { makeSignUpController, makeLoginController } from '@/main/factories';
import { expressRouteDecorator } from '@/main/decorators';

const router = Router();

router.post('/signup', expressRouteDecorator(makeSignUpController()));
router.post('/signin', expressRouteDecorator(makeLoginController()));

export default router;
