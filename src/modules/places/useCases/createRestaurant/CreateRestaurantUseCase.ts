import { AppError } from '@errors/AppError';
import { inject, injectable } from 'tsyringe';

import {
  IRestaurantsRepository,
  ICreateRestaurantDTO,
} from '../../repositories/IRestaurantsRepository';

@injectable()
export class CreateRestaurantUseCase {
  constructor(
    @inject('RestaurantsRepository')
    private restaurantsRepository: IRestaurantsRepository
  ) {}

  async execute({
    address,
    coverImage,
    description,
    lat,
    lng,
    logoImage,
    name,
    rating,
  }: ICreateRestaurantDTO): Promise<void> {
    const restaurantAlreadyExists = await this.restaurantsRepository.findByName(
      name
    );

    if (restaurantAlreadyExists) {
      throw new AppError('Restaurant already exists!');
    }

    this.restaurantsRepository.create({
      name,
      description,
      address,
      coverImage,
      lat,
      lng,
      logoImage,
      rating,
    });
  }
}
