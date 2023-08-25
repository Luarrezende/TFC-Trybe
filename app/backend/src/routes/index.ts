import { Router } from 'express';
import teams from './TeamsRoute';

const router = Router();

router.use('/teams', teams);

export default router;
