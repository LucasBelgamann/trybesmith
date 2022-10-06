import { Request, Response } from 'express';
import UsersService from '../services/Users.service';

class UserController {
  constructor(private UsersServicee = new UsersService()) {}

  public create = async (req: Request, res: Response) => {
    const { username, classe, level, password } = req.body;

    const result = await this.UsersServicee.create(username, classe, level, password);

    return res.status(201).json(result);
  };
}

export default UserController;