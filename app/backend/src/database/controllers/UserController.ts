import { Request, Response } from 'express';
import UsersService from '../services/UserService';

class UserController {
  public static async checkUser(req: Request, res: Response): Promise<any> {
    const { email, password } = req.body;
    const token = await UsersService.checkUser(email, password);

    if (!token) { return res.status(401).json({ message: 'Invalid email or password' }); }

    res.status(200).json({ token });
  }
}

export default UserController;
