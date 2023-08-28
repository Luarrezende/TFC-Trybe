import { NextFunction, Request, Response } from 'express';
import JWT from '../utils/JWT';

function ValidationToken(req: Request, res: Response, next: NextFunction): Response | void {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const tokenAuthorization = authorizationHeader.replace('Bearer ', '');

  try {
    const decoded = JWT.verify(tokenAuthorization);

    req.body.user = decoded;
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }

  next();
}

export default ValidationToken;
