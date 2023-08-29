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
    console.log(dbData);
    return dbData;
  }
}
