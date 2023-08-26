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

  public async findById(id: number): Promise<ServiceResponse<ITeam>> {
    const team = await this.modelTeams.findById(id);
    if (!team) return { status: 'NOT_FOUND', data: { message: `team ${id} not found` } };
    return { status: 'SUCCESSFUL', data: team };
  }
}
