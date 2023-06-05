import { Router } from 'express';
import MatchesController from '../controllers/MatchesController';
import validateToken from '../middlewares/validateToken';

const MatchesRouter = Router();

MatchesRouter
  .patch('/:id/finish', validateToken.check, MatchesController.updateProgress)
  .patch('/:id', validateToken.check, MatchesController.updateMatch)
  .get('/', MatchesController.getAll);

export default MatchesRouter;
