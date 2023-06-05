import { Router } from 'express';
import LeaderboardController from '../controllers/LeaderboardController';

const LeaderboardRouter = Router();

LeaderboardRouter
  .get('/', LeaderboardController.createLeaderboard)
  .get('/home', LeaderboardController.createLeaderboard)
  .get('/away', LeaderboardController.createLeaderboard);

export default LeaderboardRouter;
