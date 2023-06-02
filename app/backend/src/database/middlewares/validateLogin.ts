import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils/HttpExeception';

class validate {
  public static login(req: Request, _res: Response, next: NextFunction) {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new HttpException(400, 'All fields must be filled');
    }
    return next();
  }

  public static email(req: Request, _res: Response, next: NextFunction) {
    const { email } = req.body;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/ig;
    const validation = emailRegex.test(email);
    if (!validation) throw new HttpException(401, 'Invalid email or password');

    next();
  }

  public static password(req: Request, _res: Response, next: NextFunction) {
    const { password } = req.body;
    if (password.length < 6) throw new HttpException(401, 'Invalid email or password');

    next();
  }
}

export default validate;
