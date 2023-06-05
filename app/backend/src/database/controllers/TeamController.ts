import { Request, Response } from 'express';
import teamService from '../services/TeamService';

class teamController {
  public static async getAll(req: Request, res: Response) {
    const response = await teamService.getAll();
    console.log(response);

    return res.status(200).json(response);
  }

  public static async getById(req: Request, res: Response) {
    const { id } = req.params;
    const response = await teamService.getById(+id);
    console.log(response);

    if (!response) {
      return res.status(404).json({ message: 'There is no team with such id!' });
    }

    return res.status(200).json(response);
  }
}

export default teamController;
