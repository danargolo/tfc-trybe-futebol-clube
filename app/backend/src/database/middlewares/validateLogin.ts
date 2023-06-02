import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils/HttpExeception';

class validate {
  public static login = (req: Request, _res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new HttpException(400, 'All fields must be filled');
    }
    return next();
  };
}

export default validate;
