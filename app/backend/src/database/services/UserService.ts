import { compare } from 'bcryptjs';
import UsersModel from '../models/UsersModel';
import generateToken from '../utils/auth';
import HttpException from '../utils/HttpExeception';

class UsersService {
  public static async checkUser(email:string, password:string): Promise<string> {
    const user = await UsersModel.findOne({ where: { email } });

    console.log(password);

    if (!user) throw new HttpException(401, 'Invalid email or password');

    const checkPassword = await compare(password, user.password);

    if (!checkPassword) throw new HttpException(401, 'Invalid email or password');

    const token = generateToken(email);

    return token;
  }
}

export default UsersService;
