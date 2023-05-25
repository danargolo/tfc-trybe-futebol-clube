import { Request, Response } from 'express';
import teamService from '../services/TeamService';

class teamController {
  public static async getAll(req: Request, res: Response) {
    const response = await teamService.getAll();

    return res.status(200).json(response);
  }
}

export default teamController;
