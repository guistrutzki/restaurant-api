import { Router } from 'express';

import createRestaurantController from '../modules/places/useCases/createRestaurant';

const restaurantsRoutes = Router();

restaurantsRoutes.post('/', (req, res) => {
  return createRestaurantController().handle(req, res);
});

export { restaurantsRoutes };
