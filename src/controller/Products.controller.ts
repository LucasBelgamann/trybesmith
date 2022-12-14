import { Request, Response } from 'express';
import ProductsService from '../services/Products.service';

class ProductsController {
  constructor(private productsService = new ProductsService()) { }

  public getAll = async (req: Request, res: Response) => {
    const result = await this.productsService.getAll();

    return res.status(200).json(result);
  };

  public create = async (req: Request, res: Response) => {
    const { name, amount } = req.body;

    const result = await this.productsService.create(name, amount);

    return res.status(201).json(result);
  };
}

export default ProductsController;