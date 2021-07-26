import { getRepository, Repository } from 'typeorm';

import { Restaurant } from '../../entities/Restaurant';
import {
  ICreateRestaurantDTO,
  IRestaurantsRepository,
} from '../IRestaurantsRepository';

class RestaurantsRepository implements IRestaurantsRepository {
  private repository: Repository<Restaurant>;

  constructor() {
    this.repository = getRepository(Restaurant);
  }

  async create({
    address,
    coverImage,
    description,
    lat,
    lng,
    logoImage,
    name,
  }: ICreateRestaurantDTO): Promise<void> {
    const restaurant = this.repository.create({
      address,
      coverImage,
      description,
      lat,
      lng,
      logoImage,
      name,
    });

    await this.repository.save(restaurant);
  }

  async list(): Promise<Restaurant[]> {
    const restaurants = await this.repository.find();

    return restaurants;
  }

  async findByName(name: string): Promise<Restaurant> {
    const restaurant = await this.repository.findOne({ name });

    return restaurant;
  }
}

export { RestaurantsRepository };
