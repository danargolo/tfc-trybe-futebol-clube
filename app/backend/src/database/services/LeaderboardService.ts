import board from '../utils/leaderboard';
import MatchesService from './MatchesService';
import teamService from './TeamService';

class LeaderboardService {
  public static async createLeaderboard(str: string) {
    const teams = await teamService.getAll();
    const matches = await MatchesService.getAll('false');

    const data = board(teams, matches, str);

    return data
      .sort((a, b) => b.goalsFavor - a.goalsFavor)
      .sort((a, b) => b.goalsBalance - a.goalsBalance)
      .sort((a, b) => b.totalPoints - a.totalPoints);
  }
}

export default LeaderboardService;
