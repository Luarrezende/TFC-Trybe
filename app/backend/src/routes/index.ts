import { Router } from 'express';
import teams from './TeamsRoute';
import login from './LoginRoute';

const router = Router();

router.use('/teams', teams);
router.use('/login', login);

export default router;
