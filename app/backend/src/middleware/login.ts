import { NextFunction, Request, Response } from 'express';
import validator from 'validator';

function ValidationEmail(req: Request, res: Response, next: NextFunction): Response | void {
  const { email } = req.body;
  if (!email || email.length === 0) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  if (!validator.isEmail(email)) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  next();
}

function ValidationPassword(req: Request, res: Response, next: NextFunction): Response | void {
  const { password } = req.body;
  const number = 7;
  if (!password || password === 0) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  if (password.length < number) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  next();
}

export {
  ValidationEmail,
  ValidationPassword,
};
