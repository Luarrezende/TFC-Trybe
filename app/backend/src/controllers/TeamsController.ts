import { Request, Response } from 'express';
import TeamsService from '../services/TeamsService';
import mapStatusHTTP from '../utils';

export default class TeamsController {
  constructor(
    private teamsService = new TeamsService(),
  ) { }

  public async findAll(_req: Request, res: Response) {
    const serviceResponse = await this.teamsService.findAll();
    res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
}
