import TeamModel, {AttributesInterface} from '../models/TeamModel';

class teamService {
  public static async getAll(): Promise<AttributesInterface[]> {
    return await TeamModel.findAll()
  }
}; 

export default teamService;
