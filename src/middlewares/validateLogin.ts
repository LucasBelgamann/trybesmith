import { Request, Response, NextFunction } from 'express';
import connection from '../models/connection';
import LoginModel from '../models/Login.Model';

class ValidateLogin {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public validateLogin = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    if (!username) return res.status(400).json({ message: '"username" is required' });

    if (!password) return res.status(400).json({ message: '"password" is required' });

    const user = await this.model.getLogin(username, password);

    if (user) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }
    next();
  };
}

export default ValidateLogin;