import { IMatch } from './IMatch';
import { IBody } from './IBody';
import { IMatchBody } from './IMatchBody';
import { ITeam } from '../teams/ITeam';

export interface IMatchModel {
  findAll(): Promise<IMatch[]>,
  getInProgress(inProgress: string): Promise<IMatch[]>,
  finish(id: number): Promise<number | null>,
  updateResult(id: number, body: IBody): Promise<number>
  createMatch(body: IMatchBody): Promise<IMatchBody>
  findAllMatches(team: ITeam): Promise<IMatch[]>
}
