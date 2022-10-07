import { Pool } from 'mysql2/promise';
import { IUser } from '../interfaces/IUser';

class LoginModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getLogin(username: string, password: string): Promise<IUser[]> {
    const [result] = await this.connection.execute(
      'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
      [username, password],
    );
    
    return result as unknown as IUser[];
  }
}

export default LoginModel;