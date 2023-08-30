import { Router } from 'express';
import teams from './TeamsRoute';
import login from './LoginRoute';
import matches from './MatchRoute';
import leaderboard from './LeaderBoard';

const router = Router();

router.use('/teams', teams);
router.use('/login', login);
router.use('/matches', matches);
router.use('/leaderboard', leaderboard);

export default router;
