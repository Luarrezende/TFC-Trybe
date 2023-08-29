import ModelMatch from '../models/MatchModel';
import { IMatch } from '../Interfaces/matches/IMatch';
import { IMatchModel } from '../Interfaces/matches/IMatchModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

export default class TeamsService {
  constructor(
    private modelMatch: IMatchModel = new ModelMatch(),
  ) { }

  public async findAll(): Promise<ServiceResponse<IMatch[]>> {
    const allMatches = await this.modelMatch.findAll();
    return { status: 'SUCCESSFUL', data: allMatches };
  }
}
