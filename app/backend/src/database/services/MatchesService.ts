import MatchesModel, { AttributesInterface } from '../models/MatchesModel';
import TeamModel from '../models/TeamModel';

interface UpdateProgressResponse {
  message: string;
}

interface Match {
  homeTeamGoals: number;
  awayTeamGoals: number;
}

interface MatchRequest {
  homeTeamId: number;
  awayTeamId: number;
  homeTeamGoals: number;
  awayTeamGoals: number;

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

  public static async updateMatch(id: string, data: Match): Promise<UpdateProgressResponse> {
    const homeGoals = data.homeTeamGoals;
    const awayGoals = data.awayTeamGoals;

    console.log(homeGoals, awayGoals, 'gols');

    await MatchesModel.update({
      homeTeamGoals: homeGoals,
      awayTeamGoals: awayGoals,
    }, { where: { id } });

    return { message: 'Updated' };
  }

  public static async createMatch(data: MatchRequest) {
    const newMatch = {
      ...data,
      inProgress: true,
    };

    const resp = await MatchesModel.create(newMatch);
    return resp;
  }
}

export default MatchesService;
