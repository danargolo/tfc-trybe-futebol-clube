import { sign } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'insecure';

const generateToken = (email: string): string => {
  const token = sign({ email }, JWT_SECRET, { algorithm: 'HS256', expiresIn: '2d' });

  return token;
};

export default generateToken;
