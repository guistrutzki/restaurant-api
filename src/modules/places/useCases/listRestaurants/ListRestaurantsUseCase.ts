import { inject, injectable } from 'tsyringe';

import { Restaurant } from '../../entities/Restaurant';
import { IRestaurantsRepository } from '../../repositories/IRestaurantsRepository';

@injectable()
class ListRestaurantsUseCase {
  constructor(
    @inject('RestaurantsRepository')
    private restaurantsRepository: IRestaurantsRepository
  ) {}

  execute(): Promise<Restaurant[]> {
    const restaurants = this.restaurantsRepository.list();

    return restaurants;
  }
}

export { ListRestaurantsUseCase };
