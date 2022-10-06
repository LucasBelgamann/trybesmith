import { Request, Response } from 'express';
import OrdersService from '../services/Orders.service';

class OrdersController {
  constructor(private OrdersServicee = new OrdersService()) { }

  public getAll = async (req: Request, res: Response) => {
    const result = await this.OrdersServicee.getAll();

    return res.status(200).json(result);
  };
}

export default OrdersController;