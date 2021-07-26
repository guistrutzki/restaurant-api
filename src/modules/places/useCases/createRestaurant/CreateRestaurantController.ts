import { Request, Response } from 'express';

import { CreateRestaurantUseCase } from './CreateRestaurantUseCase';

class CreateRestaurantController {
  constructor(private createRestaurantUseCase: CreateRestaurantUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { address, coverImage, description, lat, lng, logoImage, name } =
      req.body;

    await this.createRestaurantUseCase.execute({
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
