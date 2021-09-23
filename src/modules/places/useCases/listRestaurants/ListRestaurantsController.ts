import { Response, Request } from 'express';
import { container } from 'tsyringe';

import { ListRestaurantsUseCase } from './ListRestaurantsUseCase';

class ListRestaurantsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listRestaurantsUseCase = container.resolve(ListRestaurantsUseCase);

    const allRestaurants = await listRestaurantsUseCase.execute();

    const parsedRestaurants = allRestaurants.map((eachRestaurant) => ({
      ...eachRestaurant,
      gallery: eachRestaurant.gallery ? JSON.parse(eachRestaurant.gallery) : [],
    }));

    return res.json(parsedRestaurants);
  }
}

export { ListRestaurantsController };
