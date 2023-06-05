import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

class MatchesController {
  public static async getAll(req: Request, res: Response) {
    const inProgress: string | undefined = req.query.inProgress as string;

    const response = await MatchesService.getAll(inProgress);

    res.status(200).json(response);
  }

  public static async updateProgress(req: Request, res: Response) {
    const { id } = req.params;

    const response = await MatchesService.updateProgress(id);

    res.status(200).json(response);
  }

  public static async updateMatch(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;

    console.log(data);

    const response = await MatchesService.updateMatch(id, data);

    res.status(200).json(response);
  }
}

export default MatchesController;
