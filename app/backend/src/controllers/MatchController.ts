import { Request, Response } from 'express';
import MatchService from '../services/MatchService';
import mapStatusHTTP from '../utils';

export default class TeamsController {
  constructor(
    private matchService = new MatchService(),
  ) { }

  public async findAll(req: Request, res: Response) {
    const { inProgress } = req.query;
    if (typeof inProgress === 'string') {
      const serviceResponse = await this.matchService.getInProgress(inProgress);
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    const serviceResponse = await this.matchService.findAll();
    res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
}
