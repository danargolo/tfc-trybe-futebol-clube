import { Router } from 'express';
import UserController from '../controllers/UserController';
import validate from '../middlewares/validateLogin';
import validateToken from '../middlewares/validateToken';

const userRouter = Router();

userRouter
  .post(
    '/',
    validate.login,
    validate.email,
    validate.password,
    UserController.checkUser,
  )
  .get('/role', validateToken.check, UserController.getRole);

export default userRouter;
