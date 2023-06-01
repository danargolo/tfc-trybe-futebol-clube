import { compare } from 'bcryptjs';
import UsersModel from '../models/UsersModel';
import { generateToken } from '../utils/auth';
import { throwError } from '../utils/throwError';

class UsersService {
  public static async checkUser(email:string, password:string): Promise<string> {
    const user = await UsersModel.findOne({ where: { email } });

    if (!user) throwError('Invalid email or password', 401);

    const checkPassword = await compare(password, user.password);

    if (!checkPassword) throwError('Invalid email or password', 401);

    const token = generateToken(email);

    return token;
  }
}

export default UsersService;
