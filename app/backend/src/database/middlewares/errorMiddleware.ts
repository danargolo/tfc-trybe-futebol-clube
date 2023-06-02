import { Request, Response, NextFunction } from 'express';
import httpException from '../utils/HttpExeception';

const error = (err: httpException, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || 'Erro inesperado.';

  return res.status(status).json({ message });
};

export default error;
