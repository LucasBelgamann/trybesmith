import { Request, Response } from 'express';
import LoginService from '../services/Login.service';

class LoginController {
  constructor(private LoginServicee = new LoginService()) { }

  public getAll = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const token = await this.LoginServicee.getAll(username, password);

    return res.status(200).json({ token });
  };
}

export default LoginController;