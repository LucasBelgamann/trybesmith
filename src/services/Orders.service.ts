import connection from '../models/connection';
import IOrders from '../interfaces/IOders';
import OrdersModel from '../models/OrdersModel';

class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getAll(): Promise<IOrders[]> {
    const result = await this.model.getAll();
    
    return result;
  }
}

export default OrdersService;