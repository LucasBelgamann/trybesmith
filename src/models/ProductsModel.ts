import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces/index';

class ProductsModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(name: string, amount: string): Promise<IProduct> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return { id: insertId, name, amount };
  }
}

export default ProductsModel;