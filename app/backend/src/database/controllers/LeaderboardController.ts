import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';

class LeaderboardController {
  public static async createLeaderboard(req: Request, res: Response) {
    const { path } = req;
    const str = path.split('/');
    console.log(str[1]);

    const response = await LeaderboardService.createLeaderboard(str[1]);

    res.status(200).json(response);
  }
}

export default LeaderboardController;
