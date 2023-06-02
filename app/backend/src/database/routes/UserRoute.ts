import { Router } from 'express';
import UserController from '../controllers/UserController';
import validate from '../middlewares/validateLogin';

const userRouter = Router();

userRouter
  .post('/', validate.login, UserController.checkUser);

export default userRouter;
