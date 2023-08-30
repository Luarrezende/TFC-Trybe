import { Request, Response } from 'express';
import LeaderService from '../services/LeaderService';
import mapStatusHTTP from '../utils';

export default class LeaderController {
  constructor(
    private leaderService = new LeaderService(),
  ) { }

  public async leaderboard(_req: Request, res: Response) {
    const serviceResponse = await this.leaderService.leaderboard('home');
    res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  public async leaderboardAway(_req: Request, res: Response) {
    const serviceResponse = await this.leaderService.leaderboard('away');
    res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
}
