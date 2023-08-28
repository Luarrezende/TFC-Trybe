import { ILogin } from './ILogin';

export interface ILoginModel {
  login(email: string): Promise<ILogin | null>
  getRole(email: string): Promise<string | null>
}
