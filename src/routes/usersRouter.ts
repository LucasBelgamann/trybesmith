import { Router } from 'express';
import UserController from '../controller/User.controller';

const router = Router();

const UserControllerr = new UserController();

router.post('/', UserControllerr.create);

export default router;