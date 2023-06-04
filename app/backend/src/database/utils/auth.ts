import { sign, verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'insecure';

const generateToken = (email: string): string => {
  const token = sign({ email }, JWT_SECRET, { algorithm: 'HS256', expiresIn: '2d' });

  return token;
};

const verifyToken = (token: string) => {
  try {
    const isValid = verify(token, JWT_SECRET);

    return isValid;
  } catch (error) {
    return null;
  }
};

export { generateToken, verifyToken };
