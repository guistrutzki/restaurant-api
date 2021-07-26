import {
  IRestaurantsRepository,
  ICreateRestaurantDTO,
} from '../../repositories/IRestaurantsRepository';

export class CreateRestaurantUseCase {
  constructor(private restaurantsRepository: IRestaurantsRepository) {}

  async execute({
    address,
    coverImage,
    description,
    lat,
    lng,
    logoImage,
    name,
  }: ICreateRestaurantDTO): Promise<void> {
    const restaurantAlreadyExists = await this.restaurantsRepository.findByName(
      name
    );

    if (restaurantAlreadyExists) {
      throw new Error('Restaurant already exists!');
    }

    this.restaurantsRepository.create({
      name,
      description,
      address,
      coverImage,
      lat,
      lng,
      logoImage,
    });
  }
}
