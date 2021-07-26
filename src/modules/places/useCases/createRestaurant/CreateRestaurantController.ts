import { Request, Response } from 'express';

import { CreateRestaurantUseCase } from './CreateRestaurantUseCase';

class CreateRestaurantController {
  constructor(private createCategoryUseCase: CreateRestaurantUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { address, coverImage, description, lat, lng, logoImage, name } =
      req.body;

    await this.createCategoryUseCase.execute({
      address,
      coverImage,
      description,
      lat,
      lng,
      logoImage,
      name,
    });

    return res.status(201).send();
  }
}

export { CreateRestaurantController };
