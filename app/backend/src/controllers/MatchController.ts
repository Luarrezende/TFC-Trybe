import { Request, Response } from 'express';
import MatchService from '../services/MatchService';
import mapStatusHTTP from '../utils';

export default class TeamsController {
  constructor(
    private matchService = new MatchService(),
  ) { }

  public async findAll(_req: Request, res: Response) {
    const serviceResponse = await this.matchService.findAll();
    res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
}
