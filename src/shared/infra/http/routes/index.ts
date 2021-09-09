import { Router } from 'express';

import { restaurantsRoutes } from './restaurants.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/restaurants', restaurantsRoutes);
router.use('/users', usersRoutes);

export { router };
