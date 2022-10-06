import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces/IUser';

class ProductsModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(
    username: string,
    classe: string,
    level: number,
    password: string,
  ): Promise<IUser> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    return { id: insertId, username, classe, level, password };
  }
}

export default ProductsModel;
