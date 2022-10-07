import { Router } from 'express';
import ProductController from '../controller/Products.controller';
import ValidateName from '../middlewares/validateName';

const router = Router();

const productController = new ProductController();

router.post(
  '/',
  ValidateName.validateAmount,
  ValidateName.validateName,
  productController.create,
);
router.get('/', productController.getAll);

export default router;
