import MatchesModel, { AttributesInterface } from '../models/MatchesModel';
import TeamModel from '../models/TeamModel';

interface UpdateProgressResponse {
  message: string;
}

class MatchesService {
  public static async getAll(query: string | undefined): Promise<AttributesInterface[]> {
    let result = await MatchesModel.findAll({
      include: [
        { model: TeamModel, as: 'homeTeam', attributes: ['teamName'] },
        { model: TeamModel, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });

    if (query !== undefined) {
      result = result.filter((e: { inProgress: boolean; }) =>
        e.inProgress.toString() === query);
    }

    return result;
  }

  public static async updateProgress(id: string): Promise<UpdateProgressResponse> {
    await MatchesModel.update({ inProgress: false }, { where: { id } });

    return { message: 'Finished' };
  }
}

export default MatchesService;
