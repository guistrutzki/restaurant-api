import { UsersRepository } from '@modules/accounts/repositories/implementations/UsersRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { container } from 'tsyringe';

import { RestaurantsRepository } from '../../modules/places/repositories/implementations/RestaurantsRepository';
import { IRestaurantsRepository } from '../../modules/places/repositories/IRestaurantsRepository';

container.registerSingleton<IRestaurantsRepository>(
  'RestaurantsRepository',
  RestaurantsRepository
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);
