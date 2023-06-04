import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

class MatchesController {
  public static async getAll(req: Request, res: Response) {
    const { query } = req;
    console.log(query.inProgress);

    const response = await MatchesService.getAll(query.inProgress);

    res.status(200).json(response);
  }
}

export default MatchesController;
