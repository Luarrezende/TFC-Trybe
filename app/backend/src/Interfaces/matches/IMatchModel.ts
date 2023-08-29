import { IMatch } from './IMatch';

export interface IMatchModel {
  findAll(): Promise<IMatch[]>,
  getInProgress(inProgress: string): Promise<IMatch[]>,
  finish(id: number): Promise<number | null>,
}
