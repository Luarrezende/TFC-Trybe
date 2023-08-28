import { NextFunction, Request, Response } from 'express';

function ValidationEmail(req: Request, res: Response, next: NextFunction): Response | void {
  const { email } = req.body;
  if (!email || email.length === 0) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  next();
}

function ValidationPassword(req: Request, res: Response, next: NextFunction): Response | void {
  const { password } = req.body;
  const number = 7;
  if (!password || password.length < number) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  next();
}

export {
  ValidationEmail,
  ValidationPassword,
};
