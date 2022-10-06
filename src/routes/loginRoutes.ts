import { Router } from 'express';

import LoginController from '../controller/Login.controller';
import ValidateLogin from '../middlewares/validateLogin';

const router = Router();

const LoginControllerr = new LoginController();
const ValidateLoginn = new ValidateLogin();

router.post('/', ValidateLoginn.validateLogin, LoginControllerr.getAll);

export default router;