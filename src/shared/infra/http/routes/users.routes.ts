import { CreateUserController } from '@modules/accounts/useCases/createUser/CreateUserController';
import { UpdateUserController } from '@modules/accounts/useCases/updateUser/UpdateUserController';
import { UpdateUserAvatarController } from '@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';
import uploadConfig from 'config/upload';
import { Router } from 'express';
import { ensuredAuthenticated } from 'middlewares/ensureAuthenticated';
import multer from 'multer';

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post('/', createUserController.handle);
usersRoutes.put('/', ensuredAuthenticated, updateUserController.handle);

usersRoutes.patch(
  '/avatar',
  ensuredAuthenticated,
  uploadAvatar.single('avatar'),
  updateUserAvatarController.handle
);

export { usersRoutes };
