import { ITeamModel } from '../Interfaces/teams/ITeamModel';
import { ITeam } from '../Interfaces/teams/ITeam';
import modelTeams from '../database/models/teams';

export default class ModelTeams implements ITeamModel {
  private model = modelTeams;

  async findAll(): Promise<ITeam[]> {
    const dbData = await this.model.findAll();
    return dbData.map(({ id, teamName }) => (
      { id, teamName }
    ));
  }

  async findById(id: ITeam['id']): Promise<ITeam | null> {
    const dbData = await this.model.findByPk(id);
    if (dbData == null) return null;

    const { teamName }: ITeam = dbData;
    return { id, teamName };
  }
}
