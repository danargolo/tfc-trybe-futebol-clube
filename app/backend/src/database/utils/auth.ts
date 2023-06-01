import { sign } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'insecure';

const generateToken = (email: string): string => {
  const token = sign(email, JWT_SECRET, {
    expiresIn: '2d',
    algorithm: 'HS256',
  });

  return token;
};

export default generateToken;
