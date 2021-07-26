import { Response, Request } from 'express';
import { container } from 'tsyringe';

import { ListRestaurantsUseCase } from './ListRestaurantsUseCase';

class ListRestaurantsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listRestaurantsUseCase = container.resolve(ListRestaurantsUseCase);

    const allRestaurants = await listRestaurantsUseCase.execute();

    return res.json(allRestaurants);
  }
}

export { ListRestaurantsController };
