import { Router } from 'express';

import { makeSignUp } from '@/main/factories';
import { expressRouteDecorator } from '@/main/decorators';

const router = Router();

router.post('/signup', expressRouteDecorator(makeSignUp()));

export default router;
