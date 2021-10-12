import { AppError } from '@errors/AppError';
import { IUpdateUserDTO } from '@modules/accounts/dtos/IUpdateUserDTO';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { hash, compare } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    email,
    password,
    oldPassword,
    user_id,
  }: IUpdateUserDTO): Promise<void> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User does not exists');
    }

    if (name) {
      user.name = name;
    }

    if (email) {
      user.email = email;
    }

    if (password && oldPassword) {
      const passwordMatch = await compare(oldPassword, user.password);

      if (!passwordMatch) {
        throw new AppError('Current password is incorrect');
      }

      const newPassword = await hash(password, 8);

      user.password = newPassword;
    }

    await this.usersRepository.create(user);
  }
}

export { UpdateUserUseCase };
