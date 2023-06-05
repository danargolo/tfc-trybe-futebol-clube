import { compare } from 'bcryptjs';
import UsersModel from '../models/UsersModel';
import { generateToken, verifyToken } from '../utils/auth';
import { JwtPayload } from 'jsonwebtoken';

class UsersService {
  public static async checkUser(email:string, password:string): Promise<null | string> {
    const user = await UsersModel.findOne({ where: { email } });

    if (!user) {
      return null;
    }

    const checkPassword = await compare(password, user.password);

    if (!checkPassword) return null;

    const token = generateToken(email);

    return token;
  }

  public static async getRole(authorization: string): Promise<string> {
    const decodedToken = verifyToken(authorization) as JwtPayload;

    const email = decodedToken.email;

   
    const user = await UsersModel.findOne({ where: { email } });

    const role = user?.role ?? 'default-role';

    return role;
  }
}

export default UsersService;
