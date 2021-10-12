import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateUserUseCase } from './UpdateUserUseCase';

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, name, password, oldPassword } = request.body;
    const { id } = request.user;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    await updateUserUseCase.execute({
      email,
      name,
      password,
      oldPassword,
      user_id: id,
    });

    return response.status(204).send();
  }
}

export { UpdateUserController };
