import { Request, Response } from 'express';
import LeaderService from '../services/LeaderService';
import mapStatusHTTP from '../utils';

export default class LeaderController {
  constructor(
    private leaderService = new LeaderService(),
  ) { }

  public async leaderboard(_req: Request, res: Response) {
    const serviceResponse = await this.leaderService.leaderboard();
    res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
}
