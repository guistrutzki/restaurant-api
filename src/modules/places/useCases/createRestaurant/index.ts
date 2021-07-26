import { RestaurantsRepository } from '../../repositories/implementations/RestaurantsRepository';
import { CreateRestaurantController } from './CreateRestaurantController';
import { CreateRestaurantUseCase } from './CreateRestaurantUseCase';

export default (): CreateRestaurantController => {
  const restaurantsRepository = new RestaurantsRepository();
  const createRestaurantUseCase = new CreateRestaurantUseCase(
    restaurantsRepository
  );

  const createRestaurantController = new CreateRestaurantController(
    createRestaurantUseCase
  );

  return createRestaurantController;
};
