import { IMatch } from '../Interfaces/matches/IMatch';
import { IMatchModel } from '../Interfaces/matches/IMatchModel';
import modelMatch from '../database/models/match';
import modelTeam from '../database/models/teams';

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
}
