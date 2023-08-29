import { Request, Router, Response } from 'express';
import MatchController from '../controllers/MatchController';
import ValidationToken from '../middleware/token';

const matchController = new MatchController();

const router = Router();

router.get('/', (req: Request, res: Response) => matchController.findAll(req, res));

router.patch(
  '/:id/finish',
  ValidationToken,
  (req: Request, res: Response) => matchController.finish(req, res),
);

export default router;
