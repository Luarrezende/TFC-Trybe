import * as bcrypt from 'bcryptjs';
import ModelUser from '../models/UserModel';
import { ILoginModel } from '../Interfaces/users/ILoginModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import JWT from '../utils/JWT';

export default class TeamsService {
  constructor(
    private modelUser: ILoginModel = new ModelUser(),
  ) { }

  public async login(email: string, _password: string): Promise<ServiceResponse<string | object>> {
    const user = await this.modelUser.login(email);

    if (!user || !bcrypt.compareSync(_password, user.password)) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }

    const userToken = JWT.sign({ email });

    return { status: 'SUCCESSFUL', data: { token: userToken } };
  }
}
