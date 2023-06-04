import MatchesModel, { AttributesInterface } from '../models/MatchesModel';
import TeamModel from '../models/TeamModel';

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
}

export default MatchesService;
