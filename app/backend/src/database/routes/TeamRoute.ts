import { Router } from 'express'; 
import teamController from '../controllers/TeamController';

const teamRouter = Router(); 

teamRouter
  .get('/', teamController.getAll);

export default teamRouter;

