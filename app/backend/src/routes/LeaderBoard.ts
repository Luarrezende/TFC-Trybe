import { Request, Router, Response } from 'express';
import LeaderController from '../controllers/LeaderController';

const leaderController = new LeaderController();

const router = Router();

router.get(
  '/home',
  (req: Request, res: Response) => leaderController.leaderboard(req, res),
);

router.get(
  '/away',
  (req: Request, res: Response) => leaderController.leaderboardAway(req, res),
);

export default router;
