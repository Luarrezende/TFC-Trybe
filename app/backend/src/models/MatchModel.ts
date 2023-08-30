import { IMatch } from '../Interfaces/matches/IMatch';
import { ITeam } from '../Interfaces/teams/ITeam';
import { IMatchModel } from '../Interfaces/matches/IMatchModel';
import modelMatch from '../database/models/match';
import modelTeam from '../database/models/teams';
import { IBody } from '../Interfaces/matches/IBody';
import { IMatchBody } from '../Interfaces/matches/IMatchBody';

export default class ModelMatch implements IMatchModel {
  private model = modelMatch;
  private model2 = modelTeam;

  async findAll(): Promise<IMatch[]> {
    const dbData = await this.model.findAll({
      include: [
        { model: this.model2, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: this.model2, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return dbData;
  }

  async getInProgress(inProgress: string): Promise<IMatch[]> {
    const dbData = await this.model.findAll({
      where: { inProgress: inProgress === 'true' },
      include: [
        { model: this.model2, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: this.model2, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return dbData;
  }

  async finish(id: number): Promise<number | null> {
    const [affectedRows] = await this.model.update({
      inProgress: false,
    }, {
      where: { id },
    });

    if (affectedRows === 0) return null;

    return affectedRows;
  }

  async updateResult(Mid: number, body: IBody): Promise<number> {
    const [affectedCount] = await this.model.update(
      {
        homeTeamGoals: body.homeTeamGoals, awayTeamGoals: body.awayTeamGoals,
      },
      { where: { id: Mid } },
    );
    return affectedCount;
  }

  async createMatch(body: IMatchBody): Promise<IMatchBody> {
    const { homeTeamId, homeTeamGoals, awayTeamId, awayTeamGoals } = body;

    const match = await this.model.create({
      homeTeamId,
      homeTeamGoals,
      awayTeamId,
      awayTeamGoals,
      inProgress: true,
    });
    return match;
  }

  async findAllMatches(team: ITeam): Promise<IMatch[]> {
    const all = await this.model.findAll({
      where: { homeTeamId: team.id, inProgress: false },
    });
    return all;
  }
}
