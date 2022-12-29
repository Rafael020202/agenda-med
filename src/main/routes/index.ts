import { Router } from 'express';

import { makeSignUp, makeLogin } from '@/main/factories';
import { expressRouteDecorator } from '@/main/decorators';

const router = Router();

router.post('/signup', expressRouteDecorator(makeSignUp()));
router.post('/signin', expressRouteDecorator(makeLogin()));

export default router;
