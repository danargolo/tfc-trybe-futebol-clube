import { compare } from 'bcryptjs';
import UsersModel from '../models/UsersModel';
import generateToken from '../utils/auth';

class UsersService {
  public static async checkUser(email:string, password:string): Promise<null | string> {
    const user = await UsersModel.findOne({ where: { email } });
    console.log(user);

    if (!user) {
      return null;
    }

    const checkPassword = await compare(password, user.password);

    if (!checkPassword) return null;

    const token = generateToken(email);

    return token;
  }
}

export default UsersService;
