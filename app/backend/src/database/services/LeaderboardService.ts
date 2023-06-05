import board from '../utils/leaderboard';
import MatchesService from './MatchesService';
import teamService from './TeamService';

class LeaderboardService {
  public static async createLeaderboard() {
    const teams = await teamService.getAll();
    const matches = await MatchesService.getAll('false');

    const data = board(teams, matches);

    return data;
  }
}

export default LeaderboardService;
