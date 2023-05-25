import TeamModel, { AttributesInterface } from '../models/TeamModel';

class teamService {
  public static async getAll(): Promise<AttributesInterface[]> {
    const response = await TeamModel.findAll();
    return response;
  }
}

export default teamService;
