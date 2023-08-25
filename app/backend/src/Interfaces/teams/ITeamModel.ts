import { ITeam } from './ITeam';
// import { NewEntity } from '..';

export interface ITeamModel {
  findAll(): Promise<ITeam[]>
}
