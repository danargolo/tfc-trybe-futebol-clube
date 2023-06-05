import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';
import teamService from '../services/TeamService';

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

  public static async createMatch(req: Request, res:Response) {
    const data = req.body;

    if (data.homeTeamId === data.awayTeamId) {
      return res.status(422).json({
        message: 'It is not possible to create a match with two equal teams',
      });
    }

    const homeTeam = await teamService.getById(data.homeTeamId);
    const awayTeam = await teamService.getById(data.awayTeamId);

    if (!homeTeam || !awayTeam) {
      return res.status(404).json({ message: 'There is no team with such id!' });
    }

    const response = await MatchesService.createMatch(data);

    res.status(201).json(response);
  }
}

export default MatchesController;
