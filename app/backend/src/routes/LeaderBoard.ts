import { Request, Router, Response } from 'express';
import LeaderController from '../controllers/LeaderController';

const leaderController = new LeaderController();

const router = Router();

router.get(
  '/home',
  (req: Request, res: Response) => leaderController.leaderboard(req, res),
);

export default router;
