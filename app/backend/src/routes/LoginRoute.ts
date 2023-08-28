import { Request, Router, Response } from 'express';
import LoginController from '../controllers/LoginController';
import { ValidationEmail, ValidationPassword } from '../middleware/login';
import ValidationToken from '../middleware/token';

const loginController = new LoginController();

const router = Router();

router.post(
  '/',
  ValidationEmail,
  ValidationPassword,
  (req: Request, res: Response) => loginController.login(req, res),
);

router.get(
  '/role',
  ValidationToken,
  (req: Request, res: Response) => loginController.getRole(req, res),
);

export default router;
