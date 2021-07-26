import { container } from 'tsyringe';

import { RestaurantsRepository } from '../../modules/places/repositories/implementations/RestaurantsRepository';
import { IRestaurantsRepository } from '../../modules/places/repositories/IRestaurantsRepository';

container.registerSingleton<IRestaurantsRepository>(
  'RestaurantsRepository',
  RestaurantsRepository
);
