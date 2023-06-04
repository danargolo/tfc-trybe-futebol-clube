import { compare } from 'bcryptjs';
import UsersModel from '../models/UsersModel';
import { generateToken, verifyToken } from '../utils/auth';

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

  public static async getRole(authorization: string): Promise<string> {
    const { email } = verifyToken(authorization);

    // console.log(email , "email");

    const user = await UsersModel.findOne({ where: { email } });

    return user?.role;
  }
}

export default UsersService;
