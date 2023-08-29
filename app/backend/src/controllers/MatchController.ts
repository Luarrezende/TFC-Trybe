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

  public async finish(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this.matchService.finish(Number(id));
    res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
}
