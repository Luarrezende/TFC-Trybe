import { Request, Response } from 'express';
import LoginService from '../services/LoginService';
import mapStatusHTTP from '../utils';

export default class TeamsController {
  constructor(
    private loginService = new LoginService(),
  ) { }

  public async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const serviceResponse = await this.loginService.login(email, password);
    res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
}
