import jwt from 'jsonwebtoken';
import connection from '../models/connection';
import { IToken } from '../interfaces/IToken';
import LoginModel from '../models/Login.Model';
import { secret, config } from '../middlewares/jwtConfig';

class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async getAll(username: string, password: string): Promise<IToken> {
    const result = await this.model.getLogin(username, password);

    const token = jwt.sign({ userId: result[0].id }, secret, config);
    return token as unknown as IToken;
  }
}

export default LoginService;