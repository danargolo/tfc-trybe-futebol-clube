import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';

class LeaderboardController {
  public static async createLeaderboard(_req: Request, res: Response) {
    const response = await LeaderboardService.createLeaderboard();

    res.status(200).json(response);
  }
}

export default LeaderboardController;
