import ModelTeams from '../models/TeamModel';
import { ITeam } from '../Interfaces/teams/ITeam';
import { ITeamModel } from '../Interfaces/teams/ITeamModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

export default class TeamsService {
  constructor(
    private modelTeams: ITeamModel = new ModelTeams(),
  ) { }

  public async findAll(): Promise<ServiceResponse<ITeam[]>> {
    const allTeams = await this.modelTeams.findAll();
    return { status: 'SUCCESSFUL', data: allTeams };
  }
}
