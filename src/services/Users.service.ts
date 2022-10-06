import jwt from 'jsonwebtoken';
import connection from '../models/connection';
import { IUser } from '../interfaces/IUser';
import { secret, config } from '../middlewares/jwtConfig';
import UserModel from '../models/UsersModel';

class UsersService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(
    username: string,
    classe: string,
    level: number,
    password: string,
  ): Promise<IUser> {
    const payload = await this.model.create(username, classe, level, password);
    const token = jwt.sign({ payload }, secret, config);
    const data = { token, ...payload };
    return data;
  }
}

export default UsersService;