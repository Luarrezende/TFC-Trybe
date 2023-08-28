import { ILoginModel } from '../Interfaces/users/ILoginModel';
import { ILogin } from '../Interfaces/users/ILogin';
import modelUsers from '../database/models/users';

export default class ModelUser implements ILoginModel {
  private model = modelUsers;

  async login(email: string): Promise<ILogin | null> {
    const user = await this.model.findOne({ where: { email } });
    return user;
  }

  async getRole(email: string): Promise<string | null> {
    const user = await this.model.findOne({ where: { email } });

    if (user === null) {
      return 'errou';
    }

    return user.role;
  }
}
