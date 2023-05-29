import TeamModel, { AttributesInterface } from '../models/TeamModel';

class teamService {
  public static async getAll(): Promise<AttributesInterface[]> {
    const response = await TeamModel.findAll();
    return response;
  }

  public static async getById(id : number): Promise<AttributesInterface | null> {
    const response = await TeamModel.findByPk(id);
    return response;
  }
}

export default teamService;
