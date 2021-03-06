import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateRestaurantUseCase } from './CreateRestaurantUseCase';

class CreateRestaurantController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      address,
      coverImage,
      description,
      lat,
      lng,
      logoImage,
      name,
      rating,
      gallery,
    } = req.body;

    const galleryStringify = JSON.stringify(gallery);

    const createRestaurantUseCase = container.resolve(CreateRestaurantUseCase);

    await createRestaurantUseCase.execute({
      address,
      coverImage,
      description,
      lat,
      lng,
      logoImage,
      name,
      rating,
      gallery: galleryStringify,
    });

    return res.status(201).send();
  }
}

export { CreateRestaurantController };
