import { Request, Response } from 'express';
import UsersService from '../services/UserService';

class UserController {
  public static async checkUser(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;
    const token = await UsersService.checkUser(email, password);

    if (!token) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    res.status(200).json({ token });
  }

  public static async getRole(req: Request, res:Response): Promise<void> {
    const { authorization } = req.headers;

    if (typeof authorization !== 'string') {
      res.status(401).json({ message: 'Invalid authorization header' });
      return;
    }

    const role = await UsersService.getRole(authorization);

    res.status(200).json({ role });
  }
}

export default UserController;
