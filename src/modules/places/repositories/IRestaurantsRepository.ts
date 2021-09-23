import { Restaurant } from '../entities/Restaurant';

interface ICreateRestaurantDTO {
  name: string;
  description: string;
  address: string;
  lat: string;
  lng: string;
  coverImage: string;
  logoImage: string;
  rating: number;
  gallery: string;
}

interface IRestaurantsRepository {
  findByName(name: string): Promise<Restaurant>;
  list(): Promise<Restaurant[]>;
  create(data: ICreateRestaurantDTO): Promise<void>;
}

export { ICreateRestaurantDTO, IRestaurantsRepository };
