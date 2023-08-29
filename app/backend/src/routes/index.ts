import { Router } from 'express';
import teams from './TeamsRoute';
import login from './LoginRoute';
import matches from './MatchRoute';

const router = Router();

router.use('/teams', teams);
router.use('/login', login);
router.use('/matches', matches);

export default router;
