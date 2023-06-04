import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils/HttpExeception';
import { verifyToken } from '../utils/auth';

class validateToken {
  public static check(req: Request, _res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new HttpException(401, 'Token not found');
    }

    const token = verifyToken(authorization);
    // console.log(token, "token middlewares");

    if (!token) {
      throw new HttpException(401, 'Token must be a valid token');
    }

    return next();
  }
}

export default validateToken;
