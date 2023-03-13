import { sign, decode } from 'jsonwebtoken';

export const generateJwtToken = (payload: any): string => {
  const secret = process.env.JWT_SECRET;
  const expiresIn = process.env.JWT_EXPIRES_IN;
  const token = sign(payload, secret, { expiresIn });

  return token;
};

export const decodeJwtToken = (token: string): any => {
  return decode(token);
};
