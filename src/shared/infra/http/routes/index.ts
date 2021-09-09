import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { restaurantsRoutes } from './restaurants.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/restaurants', restaurantsRoutes);
router.use('/users', usersRoutes);
router.use(authenticateRoutes);

export { router };
