import { Router } from 'express';
import teamController from '../controllers/TeamController';

const teamRouter = Router();

teamRouter
  .get('/', teamController.getAll)
  .get('/:id', teamController.getById);

export default teamRouter;
