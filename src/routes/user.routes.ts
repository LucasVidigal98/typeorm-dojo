import { Router } from 'express';

import { CreateUserController } from '../modules/user/useCases/createUser/createUserController';
import { ListUsersController } from '../modules/user/useCases/listUsers/listUsersController';

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController()

const userRoutes = Router();

userRoutes.post('/create', createUserController.handle);
userRoutes.get('/list', listUsersController.handle);

export { userRoutes };