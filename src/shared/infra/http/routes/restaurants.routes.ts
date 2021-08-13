import { CreateRestaurantController } from '@modules/places/useCases/createRestaurant/CreateRestaurantController';
import { ListRestaurantsController } from '@modules/places/useCases/listRestaurants/ListRestaurantsController';
import { Router } from 'express';

const restaurantsRoutes = Router();

const createRestaurantController = new CreateRestaurantController();
const listRestaurantController = new ListRestaurantsController();

restaurantsRoutes.post('/', createRestaurantController.handle);

restaurantsRoutes.get('/', listRestaurantController.handle);

export { restaurantsRoutes };
