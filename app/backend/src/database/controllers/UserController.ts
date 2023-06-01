import { Request, Response } from 'express';
import UsersService from '../services/UserService';

class UserController {
  public static async checkUser(req: Request, res: Response) {
    const { email, password } = req.body;
    const token = await UsersService.checkUser(email, password);
    console.log('teste');

    res.status(200).json({ token });
  }
}

export default UserController;
