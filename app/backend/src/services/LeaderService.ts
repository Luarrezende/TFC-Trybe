import ModelTeams from '../models/TeamModel';
// import { ITeam } from '../Interfaces/teams/ITeam';
import { ITeamModel } from '../Interfaces/teams/ITeamModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { IMatchModel } from '../Interfaces/matches/IMatchModel';
import ModelMatch from '../models/MatchModel';
import { ILeaderService } from '../Interfaces/leader/ILeaderService';
import joins from '../utils/calculate';

export default class LeaderService {
  constructor(
    private modelTeams: ITeamModel = new ModelTeams(),
    private modelMatch: IMatchModel = new ModelMatch(),
  ) { }

  public async leaderboard(): Promise<ServiceResponse<ILeaderService[] | unknown>> {
    const allTeams = await this.modelTeams.findAll();

    const homeTeams = await allTeams.map(async (team) => {
      const matches = await this.modelMatch.findAllMatches(team);
      const allmatches = await matches.map((matche) => (
        joins([matche], team.teamName || '')));
      const statistic = allmatches[allmatches.length - 1];
      return { ...statistic };
    });

    const result = await Promise.all(homeTeams);

    return { status: 'SUCCESSFUL', data: result };
  }
}
