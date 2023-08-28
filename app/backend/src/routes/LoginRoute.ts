import { Request, Router, Response } from 'express';
import LoginController from '../controllers/LoginController';
import { ValidationEmail, ValidationPassword } from '../middleware/login';

const loginController = new LoginController();

const router = Router();

router.post(
  '/',
  ValidationEmail,
  ValidationPassword,
  (req: Request, res: Response) => loginController.login(req, res),
);

export default router;
