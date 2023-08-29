import ModelMatch from '../models/MatchModel';
import { IMatch } from '../Interfaces/matches/IMatch';
import { IMatchModel } from '../Interfaces/matches/IMatchModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { IBody } from '../Interfaces/matches/IBody';
import { IMatchBody } from '../Interfaces/matches/IMatchBody';

export default class TeamsService {
  constructor(
    private modelMatch: IMatchModel = new ModelMatch(),
  ) { }

  public async findAll(): Promise<ServiceResponse<IMatch[]>> {
    const allMatches = await this.modelMatch.findAll();
    return { status: 'SUCCESSFUL', data: allMatches };
  }

  public async getInProgress(inProgress: string): Promise<ServiceResponse<IMatch[]>> {
    const allMatchesInProgress = await this.modelMatch.getInProgress(inProgress);
    return { status: 'SUCCESSFUL', data: allMatchesInProgress };
  }

  public async finish(id: number): Promise<ServiceResponse<object>> {
    await this.modelMatch.finish(id);
    return { status: 'SUCCESSFUL', data: { message: 'Finished' } };
  }

  public async updateResult(id: number, body: IBody): Promise<ServiceResponse<object>> {
    await this.modelMatch.updateResult(id, body);
    return { status: 'SUCCESSFUL', data: { message: 'Updated' } };
  }

  public async createMatch(body: IMatchBody): Promise<ServiceResponse<IMatchBody>> {
    const matchUp = await this.modelMatch.createMatch(body);
    return { status: 'CREATED', data: matchUp };
  }
}
