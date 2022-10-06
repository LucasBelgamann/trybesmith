import { Router } from 'express';
import OrdersController from '../controller/Orders.controller';

const router = Router();

const OrdersControllerr = new OrdersController();

router.get('/', OrdersControllerr.getAll);

export default router;