import { Router } from 'express';
import UserController from '../controller/User.controller';
import validateUsers from '../middlewares/validateUser';

const router = Router();

const UserControllerr = new UserController();

router.post(
  '/',
  validateUsers.validateClasse,
  validateUsers.validateLevel,
  validateUsers.validatePassword,
  validateUsers.validateUsername,
  UserControllerr.create,
);

export default router;
